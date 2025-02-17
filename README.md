# Description

Electron App that controls and send commands externally to Rock Band 3

![image](https://i.imgur.com/V19D9MN.png)

# Requirements

* [Nautilus](https://github.com/trojannemo/Nautilus)

### <ins>Xbox 360</ins>
* [RB3Enhanced - Nightly Feb 16 2025 or newer](https://nightly.link/RBEnhanced/RB3Enhanced/workflows/build/master)
  
  Source: https://github.com/RBEnhanced/RB3Enhanced

### <ins>RPCS3</ins>
* [Rock Band 3 Deluxe - Nightly Feb 17 2025 or newer](https://nightly.link/hmxmilohax/rock-band-3-deluxe/workflows/build/develop)

  Source: https://github.com/hmxmilohax/rock-band-3-deluxe


# Usage (Xbox 360)

* In your rb3.ini, make sure the following is enabled
```ini
[HTTP]
EnableHTTPServer = true
AllowScripts = true
```
As a saftey measure, please set ```AllowScripts``` back to false when not using
* Set your Xbox 360 IP address in the app
* Use Setlist Manager from Nautilus to export your song library to CSV, exporting with everything selected
* Import your song library by selecting the CSV file you created

# Usage (RPCS3)

* Navigate to ```dev_hdd0/game/BLUS30463/USRDIR```
* Before booting the game, in dx_settings.dta make sure the following is set to 1
```lisp
(dx_admin_mode
   (dx_admin_mode 1)
)
```
Set back to 0 when not using so RB3DX isn't constantly polling this file
* Boot the game to generate an ace_admin.dta file and point to that file in the app
* Use Setlist Manager from Nautilus to export your song library to CSV, exporting with everything selected
* Import your song library by selecting the CSV file you created

### <ins>ADVANCED USERS ONLY</ins>
* Pressing Ctrl + Shift + U will show a textbox, allowing you to enter any command to send to the game
