const dbConn = require("../config/db.config");

const UserModel = {};

UserModel.getpersonalinformationData = (callback) => {
  dbConn.query("SELECT * FROM personalinfo_tb", (error, result) => {
    if (error) {
      console.error("Error retrieving personal information data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};

UserModel.insertpersonalinformationData = (data, callback) => {
  dbConn.query("INSERT INTO peronalinfo_tb (name, LRN , birthday, Email, msteams, name of parents, contact no., Email of parents, address ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", [data.name, data.LRN, data.birthday,data.Email,data.msteams,data.nameofparents,data.contactno,data.emailofparents,data.address], (error, result) => {
    if (error) {
      console.error("Error inserting personalinformation data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};

UserModel.updatepersonalinformationData = (id, data, callback) => {
  dbConn.query(
    "UPDATE personalinfo_tb SET name=?, LRN=? , birthday=?, Email=?, msteams=?, name of parents=?, contact no.=?, Email of parents=?, address=? WHERE id=?",
    [data.name, data.LRN, data.birthday,data.Email,data.msteams,data.nameofparents,data.contactno,data.emailofparents,data.address, id],
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
  const query = "DELETE FROM personalinfo_tb WHERE id = ?";

  dbConn.query(query, [idsToDelete], (error, result) => {
    if (error) {
      console.error("Error deleting personalinformation data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};


module.exports = UserModel;
