export default function handler(req, res) {
    res.setPreviewData({
      user: 'Vishnu'
    })
    res.redirect(req.query.redirect)
  }
  