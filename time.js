function time(req, res, next) { //sempre req  res  next
    const time = new Date();
    console.log('Time:', time);
    req.time = time
    next ();
}

module.exports = time;