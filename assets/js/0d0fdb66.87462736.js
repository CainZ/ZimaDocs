"use strict";(self.webpackChunkzimadocs=self.webpackChunkzimadocs||[]).push([[1248],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),m=l,k=u["".concat(o,".").concat(m)]||u[m]||p[m]||r;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5033:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=["components"],s={sidebar_label:"Pre-installed CasaOS",title:"Pre-installed CasaOS | Advanced | ZimaBoard"},o="Pre-installed CasaOS",d={unversionedId:"advanced/preinstalled-casaos",id:"advanced/preinstalled-casaos",title:"Pre-installed CasaOS | Advanced | ZimaBoard",description:"Introdution",source:"@site/zimaboard/04-advanced/01-preinstalled-casaos.md",sourceDirName:"04-advanced",slug:"/advanced/preinstalled-casaos",permalink:"/zimaboard/advanced/preinstalled-casaos",editUrl:"https://github.com/IceWhaleTech/ZimaDocs/edit/main/zimaboard/zimaboard/04-advanced/01-preinstalled-casaos.md",tags:[],version:"current",lastUpdatedBy:"John Guan",lastUpdatedAt:1647255402,formattedLastUpdatedAt:"3/14/2022",sidebarPosition:1,frontMatter:{sidebar_label:"Pre-installed CasaOS",title:"Pre-installed CasaOS | Advanced | ZimaBoard"},sidebar:"tutorialSidebar",previous:{title:"Advanced",permalink:"/zimaboard/category/advanced"},next:{title:"BIOS",permalink:"/zimaboard/advanced/bios"}},c=[{value:"Introdution",id:"introdution",children:[],level:2},{value:"Latest Version",id:"latest-version",children:[{value:"ZimaBoard 216 (16GB eMMC)",id:"zimaboard-216-16gb-emmc",children:[],level:3},{value:"ZimaBoard 432/832 (32GB eMMC)",id:"zimaboard-432832-32gb-emmc",children:[],level:3}],level:2},{value:"CasaOS Related Default Setups",id:"casaos-related-default-setups",children:[{value:"Pre-installed CasaOS Apps",id:"pre-installed-casaos-apps",children:[],level:3}],level:2},{value:"Base OS Related Default Setups",id:"base-os-related-default-setups",children:[{value:"Version",id:"version",children:[],level:3},{value:"Default Account",id:"default-account",children:[],level:3},{value:"Modifications",id:"modifications",children:[{value:"/etc/profile",id:"etcprofile",children:[],level:4},{value:"/etc/network/interfaces",id:"etcnetworkinterfaces",children:[],level:4},{value:"Add testing source (32G eMMC Only)",id:"add-testing-source-32g-emmc-only",children:[],level:4}],level:3},{value:"Pre-installed packages",id:"pre-installed-packages",children:[{value:"sudo setup",id:"sudo-setup",children:[],level:4},{value:"samba setup",id:"samba-setup",children:[],level:4},{value:"wsdd setup",id:"wsdd-setup",children:[],level:4},{value:"Gnome desktop environment setups (32G eMMC Only)",id:"gnome-desktop-environment-setups-32g-emmc-only",children:[],level:4}],level:3},{value:"Pre-installed firmware/driver",id:"pre-installed-firmwaredriver",children:[{value:"intel-microcode",id:"intel-microcode",children:[],level:4},{value:"AX210 driver",id:"ax210-driver",children:[],level:4}],level:3}],level:2},{value:"Useful Resources",id:"useful-resources",children:[],level:2}],p={toc:c};function u(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pre-installed-casaos"},"Pre-installed CasaOS"),(0,r.kt)("h2",{id:"introdution"},"Introdution"),(0,r.kt)("p",null,"All shipped ZimaBoards are pre-installed with CasaOS (Based on Debian). It provides the out-of-the-box experience provided in ",(0,r.kt)("a",{parentName:"p",href:"/zimaboard/category/get-started"},"Get Started"),"."),(0,r.kt)("p",null,"The pre-installed CasaOS is based on Debian with some modifications and comes pre-installed with CasaOS and some common apps."),(0,r.kt)("h2",{id:"latest-version"},"Latest Version"),(0,r.kt)("h3",{id:"zimaboard-216-16gb-emmc"},"ZimaBoard 216 (16GB eMMC)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2022.02.10",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Update:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Add AX210 driver"),(0,r.kt)("li",{parentName:"ul"},"Update APT Packages"),(0,r.kt)("li",{parentName:"ul"},"Install intel-microcode"))))),(0,r.kt)("li",{parentName:"ul"},"2021.12.16",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Update:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Initial Version")))))),(0,r.kt)("h3",{id:"zimaboard-432832-32gb-emmc"},"ZimaBoard 432/832 (32GB eMMC)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2022.02.23",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Update:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Add AX210 driver"),(0,r.kt)("li",{parentName:"ul"},"Update APT packages"),(0,r.kt)("li",{parentName:"ul"},"Install intel-microcode"),(0,r.kt)("li",{parentName:"ul"},"Deactivate sleep, suspend, hibernate, hybrid-sleep targets"))))),(0,r.kt)("li",{parentName:"ul"},"2021.12.16",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Update:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Initial Version")))))),(0,r.kt)("h2",{id:"casaos-related-default-setups"},"CasaOS Related Default Setups"),(0,r.kt)("h3",{id:"pre-installed-casaos-apps"},"Pre-installed CasaOS Apps"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Default Account for All Pre-installed Apps")),(0,r.kt)("p",{parentName:"div"},"Username: ",(0,r.kt)("inlineCode",{parentName:"p"},"casaos")),(0,r.kt)("p",{parentName:"div"},"Password: ",(0,r.kt)("inlineCode",{parentName:"p"},"casaos")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"FileBrowser",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Upload, delete, preview, rename, edit and share your files."))),(0,r.kt)("li",{parentName:"ul"},"Jellyfin",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Enables you to collect, manage, and stream your media."))),(0,r.kt)("li",{parentName:"ul"},"PhotoPrism",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"An AI-powered app for browsing, organizing & sharing your photo collection."))),(0,r.kt)("li",{parentName:"ul"},"qBittorrent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Free BitTorrent downloader")))),(0,r.kt)("h2",{id:"base-os-related-default-setups"},"Base OS Related Default Setups"),(0,r.kt)("h3",{id:"version"},"Version"),(0,r.kt)("p",null,"Debian 11 nonfree"),(0,r.kt)("h3",{id:"default-account"},"Default Account"),(0,r.kt)("p",null,"User:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Username: ",(0,r.kt)("inlineCode",{parentName:"li"},"casaos")),(0,r.kt)("li",{parentName:"ul"},"Password: ",(0,r.kt)("inlineCode",{parentName:"li"},"casaos"))),(0,r.kt)("p",null,"Root:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Username: ",(0,r.kt)("inlineCode",{parentName:"li"},"root")),(0,r.kt)("li",{parentName:"ul"},"Password: ",(0,r.kt)("inlineCode",{parentName:"li"},"casaos"))),(0,r.kt)("h3",{id:"modifications"},"Modifications"),(0,r.kt)("h4",{id:"etcprofile"},"/etc/profile"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Combined PATH variable"),(0,r.kt)("li",{parentName:"ol"},"Add CASAOS_VERSION variable, Used to identify the system version.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title='/etc/profile'",title:"'/etc/profile'"},'  ......\n\n- if [ "$(id -u)" -eq 0 ]; then\n-   PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"\n- else\n-   PATH="/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games"\n- fi\n+ PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/local/games:/usr/games"\n  export PATH\n\n+ CASAOS_VERSION="yyyymmdd-vv"\n+ export CASAOS_VERSION\n\n  ......\n')),(0,r.kt)("h4",{id:"etcnetworkinterfaces"},"/etc/network/interfaces"),(0,r.kt)("p",null,"Delete the primary network interface related statement. Make both NICs hot-pluggable and recognize the network."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title='/etc/network/interfaces'",title:"'/etc/network/interfaces'"},"  # This file describes the network interfaces available on your system\n  # and how to activate them. For more information, see interfaces(5).\n\n  source /etc/network/interfaces.d/*\n\n- # The primary network interface\n- allow-hotplug enp2s0\n- iface enp2s0 inet dhcp\n")),(0,r.kt)("h4",{id:"add-testing-source-32g-emmc-only"},"Add testing source (32G eMMC Only)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title='/etc/apt/preferences.d/stable.pref'",title:"'/etc/apt/preferences.d/stable.pref'"},"+ # 500 <= P < 990: causes a version to be installed unless there is a\n+ # version available belonging to the target release or the installed\n+ # version is more recent\n+ \n+ Package: *\n+ Pin: release a=stable\n+ Pin-Priority: 900\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title='/etc/apt/preferences.d/testing.pref'",title:"'/etc/apt/preferences.d/testing.pref'"},"+ # 100 <= P < 500: causes a version to be installed unless there is a\n+ # version available belonging to some other distribution or the installed\n+ # version is more recent\n+ \n+ Package: *\n+ Pin: release a=testing\n+ Pin-Priority: 400\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"title='Shell: Add Testing Source'",title:"'Shell:",Add:!0,Testing:!0,"Source'":!0},"cd /etc/apt/sources.list.d\ncp ../sources.list stable.list\nmv ../sources.list ../sources.list.orignal\ncp stable.list testing.list\nsed -i 's/ bullseye/ testing/g' testing.list\napt update\n")),(0,r.kt)("h3",{id:"pre-installed-packages"},"Pre-installed packages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"curl"),(0,r.kt)("li",{parentName:"ul"},"sudo"),(0,r.kt)("li",{parentName:"ul"},"network-manager"),(0,r.kt)("li",{parentName:"ul"},"samba"),(0,r.kt)("li",{parentName:"ul"},"avahi-daemon"),(0,r.kt)("li",{parentName:"ul"},"unzip"),(0,r.kt)("li",{parentName:"ul"},"wsdd"),(0,r.kt)("li",{parentName:"ul"},"Gnome desktop environment (32G eMMC Only)"),(0,r.kt)("li",{parentName:"ul"},"xrdp *testing (32G eMMC Only)")),(0,r.kt)("h4",{id:"sudo-setup"},"sudo setup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"title='Shell: Make sudo available to casaos user of base OS'",title:"'Shell:",Make:!0,sudo:!0,available:!0,to:!0,casaos:!0,user:!0,of:!0,base:!0,"OS'":!0},"adduser casaos sudo\n")),(0,r.kt)("h4",{id:"samba-setup"},"samba setup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title='/etc/samba/smb.conf'",title:"'/etc/samba/smb.conf'"},"  ......\n\n+ [Data]\n+    comment = CasaOS Data\n+    path = /DATA\n+    public = Yes\n+    browseable = Yes\n+    read only = No\n+    guest ok = Yes\n+    create mask = 0777\n+    directory mask = 0777\n")),(0,r.kt)("h4",{id:"wsdd-setup"},"wsdd setup"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"title='Shell: Install wsdd'",title:"'Shell:",Install:!0,"wsdd'":!0},"wget https://github.com/christgau/wsdd/archive/master.zip\nunzip -o master.zip\nmv -f wsdd-master/src/wsdd.py wsdd-master/src/wsdd\ncp wsdd-master/src/wsdd /usr/bin\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title='/etc/systemd/system/wsdd.service'",title:"'/etc/systemd/system/wsdd.service'"},"+ [Unit]\n+ Description=Web Services Dynamic Discovery host daemon\n+ ; Start after the network has been configured\n+ After=network-online.target\n+ Wants=network-online.target\n+ ; It makes sense to have Samba running when wsdd starts, but is not required\n+ ;Wants=smb.service\n+ \n+ [Service]\n+ Type=simple\n+ ExecStart=/usr/bin/wsdd --shortlog\n+ ; Replace those with an unprivledged user/group that matches your environment,\n+ ; like nobody/nogroup or daemon:daemon or a dedicated user for wsdd\n+ ; User=nobody \n+ ; Group=nobody\n+ ; The following lines can be used for a chroot execution of wsdd.\n+ ; Also append '--chroot /run/wsdd/chroot' to ExecStart to enable chrooting\n+ ;AmbientCapabilities=CAP_SYS_CHROOT\n+ ;ExecStartPre=/usr/bin/install -d -o nobody -g nobody -m 0700 /run/wsdd/chroot\n+ ;ExecStopPost=rmdir /run/wsdd/chroot\n+ \n+ [Install]\n+ WantedBy=multi-user.target\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"title='Shell: Enable wsdd'",title:"'Shell:",Enable:!0,"wsdd'":!0},"systemctl daemon-reload\nsystemctl start wsdd\nsystemctl enable wsdd\n")),(0,r.kt)("h4",{id:"gnome-desktop-environment-setups-32g-emmc-only"},"Gnome desktop environment setups (32G eMMC Only)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"title='Shell: Setting the power policy'",title:"'Shell:",Setting:!0,the:!0,power:!0,"policy'":!0},'RUID=$(who | awk \'FNR == 1 {print $1}\')\nRUSER_UID=$(id -u ${RUID})\nsudo -u ${RUID} DBUS_SESSION_BUS_ADDRESS="unix:path=/run/user/${RUSER_UID}/bus" gsettings set org.gnome.settings-daemon.plugins.power sleep-inactive-ac-timeout 0\nsudo -u ${RUID} DBUS_SESSION_BUS_ADDRESS="unix:path=/run/user/${RUSER_UID}/bus" gsettings set org.gnome.desktop.session idle-delay 0\n')),(0,r.kt)("h3",{id:"pre-installed-firmwaredriver"},"Pre-installed firmware/driver"),(0,r.kt)("h4",{id:"intel-microcode"},"intel-microcode"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"New after 20220210")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"title='Shell: Install intel-microcode'",title:"'Shell:",Install:!0,"intel-microcode'":!0},"apt update\napt install intel-microcode -y\nreboot\n")),(0,r.kt)("h4",{id:"ax210-driver"},"AX210 driver"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"New after 20220210")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"title='Shell: Install AX210 driver'",title:"'Shell:",Install:!0,AX210:!0,"driver'":!0},"wget https://wireless.wiki.kernel.org/_media/en/users/drivers/iwlwifi-ty-59.601f3a66.0.tgz\ntar -xzvf iwlwifi-ty-59.601f3a66.0.tgz\ncp ./iwlwifi-ty-59.601f3a66.0/iwlwifi-ty-a0-gf-a0-59.ucode /lib/firmware/\nrm -rf iwlwifi-ty-59.601f3a66.0 iwlwifi-ty-59.601f3a66.0.tgz\nreboot\n")),(0,r.kt)("h2",{id:"useful-resources"},"Useful Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/casaos/intro"},"CasaOS Docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.debian.org"},"Debian Wiki"))))}u.isMDXComponent=!0}}]);