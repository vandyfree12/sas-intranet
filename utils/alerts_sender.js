var nodemailer = require('nodemailer');
var async = require('async');
var request = require("request");
var utils = require('../utils/utils');
var smtpTransport = require('nodemailer-smtp-transport');
var logger = require('../controllers/logger');


exports.paymentSuccessSms = function (user, payment) {
    var messages = [];
    var message1 = "Hi " + user.getFullName() + "\n,Your TV licence payment of GHS" + payment.amountPaid + " has been processed successfully.";
    if (user.amountDue > 0) {
        message1 = message1 + "\nYour outstanding balance is GHS" + user.amountDue;
    } else {
        var date = new Date();
        if (user.expiryDate != null) {
            if (typeof user.expiryDate == 'string') {
                date = new Date(user.expiryDate);
            } else {
                date = user.expiryDate;
            }
        } else {
            var currentDate = new Date();
            var expireYear = (currentDate.getFullYear());
            date = new Date("January 1, " + (expireYear + 1) + " 00:01:00");
        }
        var formatedDate = utils.formatDate(date);
        message1 = message1 + "\nYour TV licence has been fully paid" +
            "\nYour licence will expire on " + formatedDate;
    }
    messages.push(message1);
    if (user.accountBalance > 0) {
        var message2 = "You have a credit of GHS" + user.accountBalance + " in you TV licence account"
            + "\nAmount will be rolled over to the next year";
        messages.push(message2);
    }
    console.log("Sending Sms to " + user.mobile);
    sendSms(messages, [user.mobile]);
};

exports.paymentSuccessEmail = function (user, payment) {

    var message1 = "Dear " + user.getFullName() + ",\nYou TV licence payment of GHS " + payment.amountPaid + " has been processed successfully.";
    if (user.amountDue > 0) {
        message1 = message1 + "\nYour outstanding balance is GHS " + user.amountDue;
    } else {
        var date = new Date();
        if (user.expiryDate != null) {
            if (typeof user.expiryDate == 'string') {
                date = new Date(user.expiryDate);
            } else {
                date = user.expiryDate;
            }
        } else {
            var currentDate = new Date();
            var expireYear = (currentDate.getFullYear());
            date = new Date("December 31, " + expireYear + " 00:01:00");
        }
        var formatedDate = utils.formatDate(date);
        message1 = message1 + "\nYour TV licence has been fully paid" +
            "\nYour licence will expire on " + formatedDate;
    }
    if (user.accountBalance > 0) {
        message1 = message1 + "You have a credit of GHS" + user.accountBalance + " in you TV licence account"
            + "\nAmount will be rolled over to the next year"
    }
    var subject = "TV licence Payment";
    var messages = [{subject: subject, message: message1}];

    sendMail([user.email], messages);

};


exports.verificationCodeSms = function (user) {
    var message1 = "Change Password verification code : " + user.verifySecret;

    var messages = [];
    messages.push(message1);
    sendSms(messages, [user.mobile]);
};

exports.verificationCodeEmail = function (user, payment) {

    var message1 = "Please enter the following verification code to change your password : " + user.verifySecret;

    var subject = "Change Password verification code";
    var messages = [{subject: subject, message: message1}];


    sendMail([user.email], messages);

};

exports.sendRegisterSms = function (user, payload) {

    setTimeout(function () {

        var message1 = "Thank you for registering for TV licence. Your ID is " + user.licenceId + "\n"
            + " Please use this for identification every time you pay your tv licence";
        var today = new Date();
        var message2 = "Your TV licence amount for the year "+today.getFullYear()+" is GHS" + user.yearCharge + "\n"
            + "Please pay at GBC offices";

        sendSms([message1, message2], [payload.mobileNumber]);

    }, 1000)

};

exports.sendRegisterEmail = function (user, payload) {

    setTimeout(function () {

        var subject1 = "TV Licence Registration";
        var message1 = "Dear " + user.getFullName() + ",\nThank you for registering for TV licence. Your ID is " + user.licenceId + "\n"
            + " Please use this for identification every time you pay your tv licence";

        var subject2 = "TV licence Amount Due";
        var today = new Date();
        var message2 = "Your TV licence amount for the year "+today.getFullYear()+" is GHS" + user.yearCharge + "\n"
            + "Please pay at any bank with the TV licence poster, GBC offices and Ghana Post";

        var mails = [];
        mails.push({subject: subject1, message: message1});
        mails.push({subject: subject2, message: message2});
        sendMail([payload.emailAddress], mails)

    }, 1000);
};

exports.sendEmailMessage = function (subject, message, emailAddress) {

    setTimeout(function () {

        var mails = [];
        mails.push({subject: subject, message: message});
        sendMail([emailAddress], mails)

    }, 1000);
};


exports.sendSmsMessages = function (messages, mobile) {

    setTimeout(function () {

        sendSms(messages, [mobile]);

    }, 1000)
};

exports.sendRecordUpdateEmail = function (user) {
    setTimeout(function () {

        var subject1 = "TV Licence Registration Update";
        var message1 = "Dear " + user.getFullName() + ",\nYour tv licence information has been recently updated." + "Your current amount due is " + user.amountDue +
            "Please login to review the new changes. Please contact GBC if you do not approve this update. Your licence ID is " + user.licenceId + "\n"
            + "Please use this for identification every time you pay your tv licence";
        var email = utils.fromBase64(user.email);
        var mails = [];
        mails.push({subject: subject1, message: message1});
        sendMail([email], mails)

    }, 1000);
};


exports.sendRecordUpdateSms = function (user) {
    setTimeout(function () {
        var message1 = +",\nYour tv licence information has been recently updated." + "Your current amount due is " + user.amountDue +
            "Please login to review the new changes. Please contact GBC if you do not approve this update. Your licence ID is " + user.licenceId + "\n"
            + "Please use this for identification every time you pay your tv licence";
        var mobile = utils.fromBase64(user.mobile);
        sendSms([message1], [mobile]);

    }, 1000)
};

var sendMail = function (recepients, messages) {
    async.waterfall([function (done) {
        var sendTo = recepients.join(',');
        console.log("Sending to " + sendTo);
        var options = [];
        messages.forEach(function (item) {
            options.push(getMailOptions(sendTo, item.subject, item.message))
        });
        done(null, options)
    }, function (options, done) {
        var transporter = getSmtpTransportor();

        async.each(options, function (item) {
            transporter.sendMail(item, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Message sent: ' + info.response);
                }
            });
        });
        done();
    }])
};

var getTransportor = function () {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'info@tvlicence.com.gh',
            pass: 'gbctv@etranzact2015'
        }
    });
};

var getSmtpTransportor = function () {

    return nodemailer.createTransport(smtpTransport({
        host: 'mail.tvlicence.com.gh',
        port: 587,
        auth: {
            user: 'info@tvlicence.com.gh',
            pass: 'gbctv@etranzact2015'
        }
    }));
};


// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols

var getMailOptions = function (receipient, subject, message) {
    return {
        from: 'GBC Ghana ✔ info@tvlicence.com.gh', // sender address
        to: receipient, // list of receivers
        subject: subject, // Subject line
        text: message, // plaintext body
        html: '<b>' + message + '</b>' // html body
    }
};

function sendSms(messages, recipients) {

    setTimeout(function () {
        var mlen = messages.length;
        var rlen = recipients.length;

        for (var i = 0; i < mlen; i++) {
            try {

                var msg = messages[i];
                var mobile = "";
                for (var j = 0; j < rlen; j++) {
                    if (recipients[j].indexOf("0") === 0) {
                        mobile = "233" + recipients[j].substring(1, 10);
                    } else {
                        mobile = recipients[j];
                    }
                    sendSmsZentech(mobile, msg);
                }
            } catch (ex) {
                console.log("Error sending Sms");
                console.log(ex);
            }
        }

    }, 1000);
}

function doGetRequest(url) {
    request(url, function (error, response, body) {
        //console.log(body);
    });
}

var sendSmsZentech = function (mobile, message) {

    var config = {
        "username": "zent-etranzact",
        "password": "tranz@01",
        "url": "http://121.241.242.114:8080/bulksms/bulksms",
        source: "GBC"
    };

    var payload = {
        "username": config.username,
        "password": config.password,
        "type": 0,
        "dlr": 1,
        "destination": mobile,
        "source": config.source,
        "message": message
    };
    var options = {
        url: config.url,
        qs: payload,
        json: true,
        method: "GET"
    };
    request(options, function (error, response, body) {
        //1701|233268587331|3f1548df-dc79-4166-8ad1-cfdcd3a102ee
        logger.log("info", "Sms sent : response body >>" + body);
    });
};




