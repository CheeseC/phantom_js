var webpage = require('webpage').create()

var url = 'https://authedmine.com/media/miner.html?key=17HWsxLsFNqRkMmmI64wED9Fe7nWfXX6'

webpage.open(url, function (status) {
  if (status === 'success') {
    console.log(111111111)
    var ret = webpage.evaluate(function() {
      var startBtn = document.getElementById('mining-start')
      if (startBtn) {
        startBtn.click()
        
        setTimeout(function () {
          var add = document.getElementById('threads-add')
          var remove = document.getElementById('threads-remove')
          add.click()
          add.click()
          add.click()
          add.click()
          add.click()
        }, 1000)
        return true
      }
      return false
    })
    if (!ret) {
      phantom.exit()
    }
    // phantom.exit()
  }
  else {
    phantom.exit(-1)
  }
})

// function screenCapture () {
//   webpage.render('1.png')
//   setTimeout(screenCapture, 10000)
// }

// screenCapture()





















