export default function uploader(req, res) {
  try {
    res.status(200).json(req.file);
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Image upload failed",
      error: error.message,
    });
  }
}
