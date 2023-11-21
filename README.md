
<h1>Dokumentation Ubuntu Server für Node</h1>
<br>
<strong><h3">Schritt 1</h3></strong>
<br>
<br>
<p> Per SSH-KEY zum Server verbinden | Terminal: ssh root@142.93.105.160</p>
<p> Passphrase eingeben:....</p>
<hr>
<br>
<strong><h3">Schritt 2</h3></strong>
<br>
<br>
<p> git clone [repo] und dann cd ./ into File</p>
<p><strong>oder</strong></p>
<p> git pull origin main bei updates in repo</p>
<hr>
<br>
<strong><h3">Schritt 3</h3></strong>
<br>
<br>
<p> Um den reversed Port zu konfigurieren:</p>
<p> Terminal: apt install nginx</p>
<p> Config | Terminal:  nano/etc/nginx/sites-available/default</p>
<p> Statusabfrage: nginx -t, wenn erfolgreich reversed port erfolgreich</p>
<p> nginx neustarten, um Änderungen zu speichern | Terminal: systemctl restart nginx</p>
<hr>
<br>
<strong><h3">Schritt 4</h3></strong>
<br>
<br>
<p>Nun Server starten |Terminal: node server.js / [path] </p>
