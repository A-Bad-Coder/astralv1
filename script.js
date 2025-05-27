    document.getElementById("cloakButton").addEventListener("click", function () {
            let win = window.open("about:blank"); 
            if (!win) {
                alert("Pop-up blocked! Please allow pop-ups for this to work :D ");
                return;
            }

            let doc = win.document;

            doc.open();
            doc.write(`
                <html>
                    <head>
                        <title>Blank</title>
                        <script>
                            window.onload = function() {
                                let iframe = document.createElement('iframe');
                                iframe.style.position = 'fixed';
                                iframe.style.top = '0';
                                iframe.style.left = '0';
                                iframe.style.width = '100vw';
                                iframe.style.height = '100vh';
                                iframe.style.border = 'none';
                                iframe.src = 'https://astral-main.pages.dev';
                                document.body.appendChild(iframe);
                            };
                        </script>
                    </head>
                    <body style="margin:0; overflow:hidden;">
                    </body>
                </html>
            `);
     doc.close();