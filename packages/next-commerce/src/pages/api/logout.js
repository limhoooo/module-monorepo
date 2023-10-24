export default (req, res) => {
  if (req.method === 'POST') {
    res.setHeader('Set-Cookie', 'a_name=Mike;Max-Age=0;');
    res.statusCode = 200;
    res.json({ message: 'ok' });
  }
};
