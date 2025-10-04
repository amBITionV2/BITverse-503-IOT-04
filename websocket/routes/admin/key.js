const Key = require("../../models/Key");
const ShortUniqueId = require("short-unique-id");
const uid = new ShortUniqueId({ length: 5 });

module.exports = {
  name: "key",
  async post(req, res) {
    try {
      	const { identity, signature } = req.data;

		const keyDoc = new Key({ identity: identity, signature: signature });

		await keyDoc.save();

		return res.sendStatus(200);
    } catch (err) {
      	console.error("Error creating user:", err);
      	res.status(500).json({ error: "Internal server error" });
    }
  },

  async get(req, res) {
    
  },
};
