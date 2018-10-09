var crypto = require('crypto'),
    request = require('request')
  algorithm = 'aes-256-ctr',
  password = 'easypay-app-by-etz-aka-py',
  utilGenerator = {};

utilGenerator.generateCardWallet = function () {
  // Todo: generate cardWallet = 006 990 059 513 0008
  // Todo: get card from card table and loop through
  var bank = "006",
    card = "",
    cardWallet = "",
    possible = "0123456789";

  for (var i = 0; i < 13; i++)
    card += possible.charAt(Math.floor(Math.random() * possible.length));
  cardWallet = bank + card;
  return cardWallet;
}

utilGenerator.generateTransId = function () {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var date = new Date();
  var day = (date.getDate() < 10 ? '0' : '') + date.getDate();
  var month = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
  var year = date.getFullYear().toString().substr(2, 2);
  var customDate = "" + month + day + year;
  for (var i = 0; i < 12; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  var id = text + customDate;
  return id;
}

utilGenerator.sendRegisterSms = function (user, payload) {
  setTimeout(function () {
    var message = "Hi" + user.username + "Thank you for signing up with payoutlet v2";
    sendSms([message], [payload.mobile]);
  }, 1000)

  function sendSms(messages, recipients) {
    setTimeout(function () {
      var mlen = messages.length,
          rlen = recipients.length;

      for (var i = 0; i < mlen; i++) {
        try {
          var msg = messages[i].replace(/ /g, '+');
          var mobile = "";
          for (var j = 0; j < rlen; j++) {
            if (recipients[j].indexOf("0") === 0) {
              mobile = "233" + recipients[j].substring(1, 10);
            } else {
              mobile = recipients[j];
            }
            var myurl = "http://api.infobip.com/api/v3/sendsms/plain?user=Tranzact1&password=Godisgood123&GSM=" + mobile + "&sender=eTranzact&SMSText=" + msg;
            doGetRequest(myurl);
          }
        } catch (ex) {
          console.log("Error sending Sms");
          console.log(ex);
        }
      }
    }, 1000);
  }

  function doGetRequest(url){
    request(url, function(error, response, body) {
      //console.log(body);
    });
  }

}

module.exports = utilGenerator;
