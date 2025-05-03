## Magic Core
This is the TSwow module containing all of the code from the Modding with Magic tutorial series.
<br>
<br>
You can watch the tutorials on YouTube by clicking [here](https://www.youtube.com/playlist?list=PL-Xn4gyJ8gY-SrW6eRvtH8Ev8hS1u6pDT).

### Development Set Up
- cd into your TS-WoW installation directory `modules` folder.
- Delete any other modules present.
- Run `git clone git@github.com:magic62/magic-core.git magic-core`
- In your TS-WoW directory find `node.conf` and set the following.
    - Default.Client = "C:\\\PathToClient\\\Here"
    - Default.Realm = "magic-core.realm"
    - Default.Dataset = "magic-core.dataset"
    - AutoStart.Realms = ["magic-core.realm"]
- Open VS Code and open your TS-WoW directory folder.
- In the window click Terminal -> New Terminal
- `npm run start`

It is very likely that it will extract files at this point. You may also get a lot of errors, which is fine. Eventually it should reach a point like below:

```
[23:45:52][realm/magic-core.realm] Starting up anti-freeze thread (60 seconds max stuck time)...
[23:45:52][realm/magic-core.realm] TrinityCore rev. 395de7ea1e52 2024-10-12 09:18:37 +0200 (tswow branch) (Win64, RelWithDebInfo, Dynamic) (worldserver-daemon) ready...
[23:45:52][realm/magic-core.realm] TC>
>
```

Once it has the next step is to run `build all`.

This will apply the DBC, SQL, C++ edits etc. 
