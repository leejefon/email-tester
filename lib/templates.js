const emailTextEn = {
  resetPassword: {
    title: 'Reset Password',
    desc: 'reset your password'
  },
  activateAccount: {
    title: 'Verify Email',
    desc: 'verify your email',
    thanks: 'Thank you for signing up.'
  }
};

const emailTextZh = {
  resetPassword: {
    title: '重设密码',
    desc: '重设您的密码'
  },
  activateAccount: {
    title: '确认帐号',
    desc: '确认您的帐号',
    thanks: '感谢您通过有了平台注册 GSMA Thrive！'
  }
};

const youda = (params) => `
<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>${emailTextEn[params.type].title} / ${emailTextZh[params.type].title}</title>
    <style>
@media only screen and (max-width: 620px) {
  table[class=body] h1 {
    font-size: 18px !important;
    margin-bottom: 10px !important;
  }

  table[class=body] p,
  table[class=body] ul,
  table[class=body] ol,
  table[class=body] td,
  table[class=body] span,
  table[class=body] a {
    font-size: 10px !important;
  }

  table[class=body] .container {
    padding: 0 !important;
    width: 100% !important;
  }

  table[class=body] .content {
    padding: 0 !important;
  }

  table[class=body] .wrapper {
    padding: 10px !important;
  }

  table[class=body] .main {
    border-left-width: 0 !important;
    border-radius: 0 !important;
    border-right-width: 0 !important;
  }

  table[class=body] .half {
    padding: 5px !important;
  }

  table[class=body] a.btn {
    padding: 5px !important;
  }

  table[class=body] .img-responsive {
    height: auto !important;
    max-width: 100% !important;
    width: auto !important;
  }
}
</style>
  </head>
  <body class="" style="background-color: #f6f6f6; font-family: sans-serif; font-size: 14px; line-height: 1.4; margin: 0; padding: 0;">
    <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;"></span>
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="background-color: #f6f6f6; width: 100%;" width="100%" bgcolor="#f6f6f6">
      <tr>
        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
        <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 640px; padding: 10px; width: 640px; margin: 0 auto;" width="640" valign="top">
          <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 640px; padding: 10px;">

            <!-- START CENTERED WHITE CONTAINER -->
            <table role="presentation" class="main" style="background: #ffffff; border-radius: 3px; width: 100%;" width="100%">
              <tr>
                <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top">
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%;" width="100%">
                    <tr>
                      <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">
                        <h2>${emailTextEn[params.type].title} / ${emailTextZh[params.type].title}</h2>

                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="width: 100%;" width="100%">
                          <tbody>
                            <tr>
                              <td align="center" class="half" style="font-family: sans-serif; font-size: 14px; vertical-align: top; width: 40%; padding: 0 30px;" width="40%" valign="top">
                                <p style="text-align: left;">${emailTextEn[params.type].thanks || ''} You can ${emailTextEn[params.type].desc} by copying the token below and enter on the website:</p>
                                <a class="btn" target="_blank" style="background-color: #ffffff; border: solid 1px #666; border-radius: 5px; box-sizing: border-box; color: #666; cursor: pointer; display: inline-block; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-decoration: none; text-transform: capitalize;">TOKEN</a>
                                <h4 style="text-align: left;">Sincerely,<br></h4>
                                <h4 style="text-align: left;">GSMA Thrive team<br></h4>
                                <p style="text-align: left;">GSMA Thrive is a virtual event platform brought to you by the people behind MWC.<br></p>
                              </td>
                              <td align="center" class="half" style="font-family: sans-serif; font-size: 14px; vertical-align: top; width: 40%; padding: 0 30px;" width="40%" valign="top">
                                <p style="text-align: left;">${emailTextZh[params.type].thanks || ''}您可以复制下面短码到网站来${emailTextZh[params.type].desc}：</p>
                                <a class="btn" target="_blank" style="background-color: #ffffff; border: solid 1px #666; border-radius: 5px; box-sizing: border-box; color: #666; cursor: pointer; display: inline-block; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-decoration: none; text-transform: capitalize;">TOKEN</a>
                                <h4 style="text-align: left;">诚挚,<br></h4>
                                <h4 style="text-align: left;">有了团队<br></h4>
                                <p style="text-align: left;">您是否已经在策划展会？</p>
                                <p style="text-align: left;">有了平台为您提供高效率便捷的数字展会筹划解决方案。<br></p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <!-- END CENTERED WHITE CONTAINER -->

            <!-- START FOOTER -->
            <div class="footer" style="clear: both; margin-top: 10px; text-align: center; width: 100%;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="width: 100%;" width="100%">
                <tr>
                  <td class="content-block" style="font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #999999; font-size: 12px; text-align: center;" valign="top" align="center">
                    <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">&copy; 2020 『Gotin』 Copyrights Reserved / 『有了』版权所有</span>
                  </td>
                </tr>
              </table>
            </div>
            <!-- END FOOTER -->

          </div>
        </td>
        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
      </tr>
    </table>
  </body>
</html>
`;

const simple = () => 'Hello World';

module.exports = {
  youdaResetPass: () => youda({ type: 'resetPassword' }),
  youdaVerifyEmail: () => youda({ type: 'activateAccount' }),
  simple
};
