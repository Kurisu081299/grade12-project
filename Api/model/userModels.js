const dbConn = require("../config/dbconfig");

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
  dbConn.query("INSERT INTO studentinfo (Grade_Level=?, Name=?, LRN=? , Birthday=?, Email=?, Ms_Teams=?, Nameofparents=?, Contactno=?, Emailofparents=?, Address=? ) VALUES (?, ?, ?, ?, ?, ?, ?, ?,?,?)", [data.Grade_Level, data.Name, data.LRN, data.Birthday,data.Email,data.Ms_Teams,data.Nameofparents,data.Contactno,data.Emailofparents,data.Address], (error, result) => {
    if (error) {
      console.error("Error inserting personalinformation data: ", error);
      return callback(error, null);
    }

    return callback(null, result);
  });
};

UserModel.updatepersonalinformationData = (id, data, callback) => {
  dbConn.query(
    "UPDATE studentinfo SET id=?, Grade_level=?, Name=?, LRN=? , Birthday=?, Email=?, Ms_Teams=?, Nameofparents=?, Contactno=?, Emailofparents=?, Address=? WHERE id=?",
    [data.ID, data.Grade_level, data.Name, data.LRN, data.Birthday,data.Email,data.Ms_Teams,data.Nameofparents,data.Contactno,data.Emailofparents,data.Address, ID],
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
