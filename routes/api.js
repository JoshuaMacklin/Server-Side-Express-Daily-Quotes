var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  let answer = ['It is never too late to be what you might have been -George Eliot','What lies behind us and what lies before us are tiny matters compared to what lies within us -Henry Stanley Haskins','Great thoughts speak only to the thoughtful mind, but great actions speak to all mankind -Emily P. Bissell','I haven’t failed, I’ve just found 10,000 ways that don’t work -Thomas Edison','You must be the change you want to see in the world -Mahatma Gandhi','Remember that happiness is a way of travel, not a destination -Roy M. Goodman','A successful man is one who can lay a firm foundation with the bricks that others throw at him -Sidney Greenberg','The two most important days in your life are the day you are born and the day you find out why -Mark Twain','If you want to test your memory, try to recall what you were worrying about one year ago today -E. Joseph Cossman','In between goals is a thing called life, that has to be lived and enjoyed -Sid Caesar','Whether you think you can, or you think you can’t, you’re right -Henry Ford','Whether you think you can, or you think you can’t, you’re right -Henry Ford','Defeat is not bitter unless you swallow it -Joe Clark','Not everything that can be counted counts, and not everything that counts can be counted -William Bruce Cameron'];
  // for (var i = 0; i < answer.length; i++) {
  //   resp = answer[i]
  // }
  let resp = (Math.floor(Math.random()*answer.length))

     res.send(JSON.stringify(answer[resp]));
});

module.exports = router;
