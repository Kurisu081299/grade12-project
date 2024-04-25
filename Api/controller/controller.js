const userModel = require('../model/userModel');

const userController = {};

userController.getstudentinfoData = (req, res) => {
  // Call the model to get personalinformation data
  userModel.getstudentinfoData((error, studentinfoinfoData) => {
    if (error) {
      console.error("Error getting personal information data: ", error);
      return res.status(500).json({ message: "Error getting personal information data" });
    }

    return res.status(200).json({ message: "information retrieved", data: studentinfoData });
  });
};

userController.poststudentinfoData = (req, res) => {
  const { name, LRN, birthday, Email, Msteams, nameofparents, contactno, Emailofparents, address  } = req.body;

  // Check if required fields are provided
  if (!name || !LRN || !birthday || !Email || !Msteams || !nameofparents || !contactno || !Emailofparents || !address) {
    return res.status(400).json({ message: "Please provide name, LRN, birthday, Email, Ms teams,name of parents, contact no.,Email of parents,Address" });
  }

  const data = { name, LRN, birthday, Email, Msteams, nameofparents, contactno, Emailofparents, address };

  // Call the model to insert personalinformation data
  userModel.insertstudentinfoData(data, (error, result) => {
    if (error) {
      console.error("Error inserting personal information data: ", error);
      return res.status(500).json({ message: "Error inserting personalinformation data" });
    }

    return res.status(200).json({ message: "personal information data inserted successfully" });
  });
};

userController.putstudentinfoData = (req, res) => {
  const { id } = req.body; // Get id from URL params
  const { name, LRN, birthday, Email, Msteams, nameofparents, contactno, Emailofparents, address } = req.body;

  // Check if required fields are provided
  if (!name || !age || !address) {
    return res.status(400).json({ message: "Please provide name, LRN, birthday, Email, Ms teams,name of parents, contact no.,Email of parents,Address" });
  }

  const data = { name, age, address };

  // Call the model to update personalinformation data
  userModel.updateGrade11Data(id, data, (error, result) => {
    if (error) {
      console.error("Error updating personalinformation data: ", error);
      return res.status(500).json({ message: "Error updating personalinformation data" });
    }

    return res.status(200).json({ message: "personalinformation data updated successfully" });
  });
};

// Delete personalinformation Data
userController.deletestudentinfoData = (req, res) => {
  const idsToDelete = req.body.id; // Assuming you're passing an array of IDs in req.body.ids

  if (!idsToDelete) {
    return res.status(400).json({ message: "ID to delete are required in the request body" });
  }

  userModel.deletestudentinfoData(idsToDelete, (error, result) => {
    if (error) {
      console.error("Error deleting personalinformation data: ", error);
      return res.status(500).json({ message: "Error deleting personal information data" });
    }

    return res.status(200).json({ message: "personal information data deleted successfully", deletedCount: result.affectedRows });
  });
};

module.exports = userController;
