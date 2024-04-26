const dbConn = require("../config/db.config");

const UserModel = {};

UserModel.getpersonalinformationData = (callback) => {
  dbConn.query("SELECT * FROM studentinfo", (error, result) => {
    if (error) {
      console.error("Error retrieving personal information data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};

UserModel.insertpersonalinformationData = (data, callback) => {
  dbConn.query("INSERT INTO studentinfo (id, Grade_level, name, LRN , birthday, Email, msteams, name of parents, contact no., Email of parents, address ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [data.name, data.LRN, data.birthday,data.Email,data.msteams,data.nameofparents,data.contactno,data.emailofparents,data.address], (error, result) => {
    if (error) {
      console.error("Error inserting personalinformation data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};

UserModel.updatepersonalinformationData = (id, data, callback) => {
  dbConn.query(
    "UPDATE studentinfo SET id=?, Grade_level=?, name=?, LRN=? , birthday=?, Email=?, msteams=?, name of parents=?, contact no.=?, Email of parents=?, address=? WHERE id=?",
    [data.id, data.Grade_level, data.name, data.LRN, data.birthday,data.Email,data.msteams,data.nameofparents,data.contactno,data.emailofparents,data.address, id],
    (error, result) => {
      if (error) {
        console.error("Error updating personalinformation data: ", error);
        return callback(error, null);
      }

      return callback(null, result);
    }
  );
};

UserModel.deletepersonalinformationData = (idsToDelete, callback) => {
  const query = "DELETE FROM studentinfo WHERE id = ?";

  dbConn.query(query, [idsToDelete], (error, result) => {
    if (error) {
      console.error("Error deleting personalinformation data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};


module.exports = UserModel;
