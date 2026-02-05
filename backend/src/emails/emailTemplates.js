export function createWelcomeEmailTemplate(name, clientURL) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to NexChat</title>
    </head>
  <body style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #484848; margin: 0; padding: 0; background-color: #f4f7f6;">
    
    <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.08);">
      
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center;">
        <div style="background-color: rgba(255, 255, 255, 0.2); width: 80px; height: 80px; margin: 0 auto 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(5px);">
           <img src="https://cdn-icons-png.flaticon.com/512/2665/2665335.png" alt="Messenger Logo" style="width: 45px; height: 45px; display: block; margin: 18px auto;">
        </div>
        <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: 0.5px;">Welcome Aboard!</h1>
        <p style="color: rgba(255,255,255,0.9); margin-top: 10px; font-size: 16px;">We’re thrilled to have you here.</p>
      </div>

      <div style="padding: 40px 30px;">
        <p style="font-size: 18px; color: #2d3748; margin-top: 0;"><strong>Hi ${name},</strong></p>
        <p style="color: #718096; font-size: 16px;">You have successfully joined the <strong>NexChat</strong> community. Connect with friends, family, and colleagues in real-time—seamlessly and securely.</p>
        
        <div style="background-color: #f8fafc; border-radius: 12px; padding: 25px; margin: 30px 0;">
          <p style="font-size: 14px; text-transform: uppercase; color: #a0aec0; letter-spacing: 1px; font-weight: 700; margin: 0 0 15px 0;">Here is how to get started:</p>
          
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td style="padding-bottom: 12px; vertical-align: top; width: 30px; font-size: 20px;">📸</td>
              <td style="padding-bottom: 12px; color: #4a5568;"><strong>Upload a photo</strong> to make your profile pop.</td>
            </tr>
            <tr>
              <td style="padding-bottom: 12px; vertical-align: top; width: 30px; font-size: 20px;">👋</td>
              <td style="padding-bottom: 12px; color: #4a5568;"><strong>Find friends</strong> by syncing your contacts.</td>
            </tr>
            <tr>
              <td style="padding-bottom: 0; vertical-align: top; width: 30px; font-size: 20px;">💬</td>
              <td style="padding-bottom: 0; color: #4a5568;"><strong>Say hello</strong> and start your first chat!</td>
            </tr>
          </table>
        </div>

        <div style="text-align: center; margin-top: 40px; margin-bottom: 20px;">
          <a href="${clientURL}" style="background-color: #764ba2; background: linear-gradient(90deg, #764ba2 0%, #667eea 100%); color: #ffffff; padding: 16px 45px; border-radius: 50px; text-decoration: none; font-weight: 600; font-size: 16px; display: inline-block; box-shadow: 0 4px 15px rgba(118, 75, 162, 0.4);">
            Open NexChat
          </a>
        </div>
        
        <p style="text-align: center; color: #a0aec0; font-size: 14px; margin-top: 30px;">Need help? Just reply to this email.</p>
      </div>

      <div style="background-color: #f7fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
        <p style="color: #cbd5e0; font-size: 12px; margin: 0;">© 2025 Messenger Platform. All rights reserved.</p>
        <div style="margin-top: 10px;">
          <a href="#" style="color: #a0aec0; text-decoration: none; font-size: 12px; margin: 0 8px;">Unsubscribe</a>
          <a href="#" style="color: #a0aec0; text-decoration: none; font-size: 12px; margin: 0 8px;">Privacy</a>
          <a href="#" style="color: #a0aec0; text-decoration: none; font-size: 12px; margin: 0 8px;">Support</a>
        </div>
      </div>
      
    </div>
  </body>
  </html>
  `;
}