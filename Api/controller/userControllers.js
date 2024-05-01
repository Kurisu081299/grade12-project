const userModel = require('../model/userModels');

const userController = {};

userController.getpersonalinformationData = (req, res) => {
  // Call the model to get personalinformation data
  userModel.getpersonalinformationData((error, personalinformationData) => {
    if (error) {
      console.error("Error getting personal information data: ", error);
      return res.status(500).json({ message: "Error getting personal information data" });
    }

    return res.status(200).json({ message: "information retrieved", data: personalinformationData });
  });
};

userController.postpersonalinformationData = (req, res) => {
  const { Grade_Level, Name, LRN, Birthday, Email, Ms_Teams, Nameofparents, Contactno, Emailofparents, Address  } = req.body;

  // Check if required fields are provided
if (!Grade_Level || !Name || !LRN || !Birthday || !Email || !Ms_Teams || !Nameofparents || !Contactno || !Emailofparents || !Address) {
    return res.status(200).json({ message: "Please provide Grade_Level, name, LRN, birthday, Email, Ms teams,name of parents, contact no,Email of parents,Address" });
  }

  const data = { Grade_Level, Name, LRN, Birthday, Email, Ms_Teams, Nameofparents, Contactno, Emailofparents, Address };

  // Call the model to insert personalinformation data
  userModel.insertpersonalinformationData(data, (error, result) => {
    if (error) {
      console.error("Error inserting personal information data: ", error);
      return res.status(500).json({ message: "Error inserting personalinformation data" });
    }

    return res.status(200).json({ message: "personal information data inserted successfully" });
  });
};

userController.putpersonalinformationData = (req, res) => {
  const { id } = req.body; // Get id from URL params
  const { Grade_Level, Name, LRN, Birthday, Email, Ms_Teams, Nameofparents, Contactno, Emailofparents, Address } = req.body;

  // Check if required fields are provided
  if (!Grade_Level ||!Name || !LRN || !Birthday || !Email || !Ms_Teams || !Nameofparents || !Contactno || !Emailofparents || !Address) {
    return res.status(400).json({ message: "Please provide name, LRN, birthday, Email, Ms teams,name of parents, contact no.,Email of parents,Address" });
  }

  const data = { Grade_Level,Name, LRN, Birthday, Email, Ms_Teams, Nameofparents, Contactno, Emailofparents, Address  };

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
userController.deletepersonalinformationData = (req, res) => {
  const idsToDelete = req.body.id; // Assuming you're passing an array of IDs in req.body.ids

  if (!idsToDelete) {
    return res.status(400).json({ message: "ID to delete are required in the request body" });
  }

  userModel.deletepersonalinformationData(idsToDelete, (error, result) => {
    if (error) {
      console.error("Error deleting personalinformation data: ", error);
      return res.status(500).json({ message: "Error deleting personal information data" });
    }

    return res.status(200).json({ message: "personal information data deleted successfully", deletedCount: result.affectedRows });
  });
};

module.exports = userController;
