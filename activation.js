 // 获取诊断信息
            let diagnosticInfo = `<h2 style="margin-top:0; color:#333;">🔍 诊断信息</h2>`;
            
            // 1. User ID
            diagnosticInfo += `<div style="margin-bottom:20px; padding:10px; background:#f5f5f5; border-radius:8px;">
                <strong style="color:#007aff;">User ID:</strong><br>
                <code style="background:#fff; padding:5px; border-radius:4px; display:block; margin-top:5px; word-break:break-all;">${currentUserId}</code>
            </div>`;
            
            // 2. 检查 Service Worker
            let swStatus = '❌ 未注册';
            if ('serviceWorker' in navigator) {
                const registration = await navigator.serviceWorker.getRegistration();
                if (registration) {
                    swStatus = '✅ 已注册';
                    if (registration.active) {
                        swStatus += ' (激活)';
                    }
                }
            }
            diagnosticInfo += `<div style="margin-bottom:20px; padding:10px; background:#f5f5f5; border-radius:8px;">
                <strong style="color:#007aff;">Service Worker:</strong><br>
                <span style="margin-top:5px; display:block;">${swStatus}</span>
            </div>`;
            
            // 3. 推送订阅状态
            let subStatus = '❌ 未订阅';
            let subEndpoint = '无';
            if ('serviceWorker' in navigator && 'PushManager' in window) {
                const registration = await navigator.serviceWorker.getRegistration();
                if (registration) {
                    const subscription = await registration.pushManager.getSubscription();
                    if (subscription) {
                        subStatus = '✅ 已订阅';
                        subEndpoint = subscription.endpoint.substring(0, 50) + '...';
                    }
                }
            }
            diagnosticInfo += `<div style="margin-bottom:20px; padding:10px; background:#f5f5f5; border-radius:8px;">
                <strong style="color:#007aff;">推送订阅:</strong><br>
                <span style="margin-top:5px; display:block;">${subStatus}</span>
                <code style="background:#fff; padding:5px; border-radius:4px; display:block; margin-top:5px; font-size:10px; word-break:break-all;">${subEndpoint}</code>
            </div>`;
            
