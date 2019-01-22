const db = require('../_helpers/db');

const Tender = db.Tender;

async function getAll() {
  return await Tender.find();
}

async function getById(id) {
  return await Tender.findById(id);
}

async function create(tenderParam) {
  const tender = new Tender(tenderParam);

  await tender.save();
}

async function _delete(id) {
  await Tender.findByIdAndRemove(id);
}

module.exports = {
  getAll,
  getById,
  create,
  delete: _delete
};
