# Description

Electron App that control and send commands externally Rock Band 3 Deluxe on the RPCS3 emulator

# Requirements

* [RPCS3 Emulator](https://github.com/RPCS3/rpcs3)
* [Rock Band 3 Deluxe - event_admin branch](https://github.com/LinosM/rock-band-3-deluxe/tree/event_admin)
* [Nautilus](https://github.com/trojannemo/Nautilus)

![image](https://i.imgur.com/V19D9MN.png)

# Usage

* Use Setlist Manager from Nautilus to export your song library to CSV, exporting with everything selected
* Boot RB3DX once to generate the ace_admin.dta file
* Within the app, navigate to dev_hdd0\game\BLUS30463\USRDIR and select the ace_admin.dta file
* Import your song library by selecting the CSV file you created
