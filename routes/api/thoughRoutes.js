const router = require("express").Router();
const {
  getAllThoughts,
  getSingleThought,
  createThought,
  editThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController");
// /api/thoughts
router.route("/").get(getAllThoughts).post(createThought);
// /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(editThought)
  .delete(deleteThought);
// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);
// /api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);
module.exports = router;
