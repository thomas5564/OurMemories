import React, { useState, useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db, storage } from "./firebase-config"; // Import Firestore and Storage instances
import { collection, onSnapshot, addDoc, doc, deleteDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Import Storage methods
import "./Dashboard.css"; // Link your new CSS file here

function Dashboard() {
  const auth = getAuth(); // Firebase Auth instance
  const navigate = useNavigate(); // For navigation
  const [clickedImageId, setClickedImageId] = useState(null); // Track which image is clicked

  const handleImageClick = (imageId) => {
    if(clickedImageId===imageId){
      setClickedImageId(null)
    }else{
      setClickedImageId(imageId); 
    }
  };
  // Form states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null); // Store selected image file
  const [features, setFeatures] = useState([]);

  // Firestore collection reference
  const collectionRef = collection(db, "features");

  // Logout functionality
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully");
      navigate("/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  // Real-time Firestore updates
  useEffect(() => {
    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      const fetchedFeatures = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFeatures(fetchedFeatures);

    });

    return () => unsubscribe(); // Cleanup on component unmount
  }, []);

  // Upload image to Firebase Storage and get the download URL
  const uploadImage = async (file) => {
    if (!file) return null;

    const storageRef = ref(storage, `images/${file.name}`); // Path in Firebase Storage
    try {
      await uploadBytes(storageRef, file); // Upload the file
      const downloadURL = await getDownloadURL(storageRef); // Get the image URL
      return downloadURL;
    } catch (error) {
      console.error("Error uploading image: ", error);
      return null;
    }
  };

  // Add feature to Firestore
  const addFeature = async () => {
    if (title && description && imageFile) {
      try {
        const imageURL = await uploadImage(imageFile); // Upload image and get URL
        if (imageURL) {
          await addDoc(collectionRef, { title, description, image: imageURL });
          setTitle("");
          setDescription("");
          setImageFile(null);
        } else {
          alert("Image upload failed.");
        }
      } catch (e) {
        console.error("Error adding feature: ", e);
      }
    } else {
      alert("Please fill in all fields and upload an image.");
    }
  };

  // Delete feature from Firestore
  const deleteFeature = async (featureId) => {
    try {
      const featureDoc = doc(db, "features", featureId); // Reference to the specific document
      await deleteDoc(featureDoc); // Delete the document
      console.log("Feature deleted successfully");
    } catch (error) {
      console.error("Error deleting feature: ", error.message);
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Celebrating our memories</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <div className="add-feature-container">
        <div className="vovo">
          <h2>Add a New Memory</h2>
          <img src="avo.png" alt="test" height="80px"/>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Enter Date (day/month/year)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-input"
          />
        <textarea
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-textarea"
          rows="4" // Number of visible lines
          cols="50" // Width of the textarea
        ></textarea>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="form-input"
          />
          <button className="add-btn" onClick={addFeature}>
            Add Memory
          </button>
        </div>
      </div>

      <div className="features-container">
        <h2>Memories</h2>
        {features
  .sort((a, b) => {
    const dateA = a.title.split(" ").pop(); // Extract the date from the title
    const dateB = b.title.split(" ").pop();
    const [dayA, monthA, yearA] = dateA.split("/").map(Number); // Parse the date
    const [dayB, monthB, yearB] = dateB.split("/").map(Number);

    // Compare the dates
    return new Date(yearA, monthA - 1, dayA) - new Date(yearB, monthB - 1, dayB);
  })
  .map((feature, index) => {
    const imageNumber = (index % 11) + 1; // Calculate image number (1 to 11 cycling)

    return (
      <div key={feature.id} className="feature-card">
        <div className="topn">
          <h3>{feature.title}</h3>
          {clickedImageId !== feature.id && <img className="lilguys" height="80px" src={`/pic${imageNumber}.png`} alt="Feature Image" />}
          {clickedImageId === feature.id && (
            <button
              className="delete-btn"
              onClick={() => deleteFeature(feature.id)}
            >
              Delete Memory
            </button>
          )}
        </div>
        <div className="feature-content">
          {feature.image && (
            <img
              src={feature.image}
              alt={feature.title}
              className="feature-image"
              onClick={() => handleImageClick(feature.id)} // Pass specific ID
            />
          )}
          <div className="desc">
            <p>{feature.description}</p>
          </div>
        </div>
      </div>
    );
  })}

      </div>
    </div>
  );
}

export default Dashboard;
