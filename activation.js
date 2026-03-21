<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>激活码验证</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
            padding: 20px;
        }
        .container {
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            padding: 40px;
            max-width: 400px;
            width: 100%;
            text-align: center;
        }
        h1 {
            color: #333;
            margin-bottom: 10px;
        }
        .subtitle {
            color: #666;
            margin-bottom: 30px;
            font-size: 14px;
        }
        input {
            width: 100%;
            padding: 15px;
            font-size: 16px;
            border: 2px solid #e0e0e0;
            border-radius: 10px;
            margin-bottom: 20px;
            box-sizing: border-box;
            transition: border-color 0.3s;
        }
        input:focus {
            outline: none;
            border-color: #667eea;
        }
        button {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 15px 30px;
            font-size: 16px;
            border-radius: 10px;
            cursor: pointer;
            width: 100%;
            transition: transform 0.2s;
        }
        button:hover {
            transform: translateY(-2px);
        }
        button:active {
            transform: translateY(0);
        }
        .message {
            margin-top: 20px;
            padding: 10px;
            border-radius: 8px;
            display: none;
        }
        .message.success {
            background: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        .message.error {
            background: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
        .info {
            margin-top: 30px;
            padding: 15px;
            background: #f5f5f5;
            border-radius: 10px;
            font-size: 12px;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🔐 软件激活</h1>
        <div class="subtitle">请输入激活码（任意激活码均可）</div>
        <input type="text" id="activationCode" placeholder="请输入激活码" autocomplete="off">
        <button onclick="activate()">立即激活</button>
        <div id="message" class="message"></div>
        <div class="info">
            💡 提示：任意非空字符即可激活<br>
            <span style="font-size: 10px;">例如：123456、test、demo 等</span>
        </div>
    </div>

    <script>
        // 检查是否已激活
        if (localStorage.getItem('isActivated') === 'true') {
            // 已激活，跳转到主页面
            window.location.href = '/main';
        }

        function activate() {
            const code = document.getElementById('activationCode').value;
            const messageDiv = document.getElementById('message');
            
            // 任意激活码都能通过
            if (code && code.trim().length > 0) {
                // 保存激活状态
                localStorage.setItem('isActivated', 'true');
                localStorage.setItem('activationCode', code.trim());
                localStorage.setItem('activationTime', new Date().toISOString());
                
                // 显示成功消息
                messageDiv.className = 'message success';
                messageDiv.style.display = 'block';
                messageDiv.textContent = '✅ 激活成功！正在跳转...';
                
                // 跳转到主页面
                setTimeout(() => {
                    window.location.href = '/main';
                }, 1500);
            } else {
                // 显示错误消息
                messageDiv.className = 'message error';
                messageDiv.style.display = 'block';
                messageDiv.textContent = '❌ 请输入激活码';
            }
        }
        
        // 支持回车键提交
        document.getElementById('activationCode').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                activate();
            }
        });
    </script>
</body>
</html>
            
