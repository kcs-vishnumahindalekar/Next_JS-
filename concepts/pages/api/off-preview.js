export default function handler(req, res) {
    res.clearPreviewData()
    res.redirect(req.query.redirect)
  }
  