"use strict";(self.webpackChunkhomelabwiki=self.webpackChunkhomelabwiki||[]).push([[819],{3905:(e,a,o)=>{o.d(a,{Zo:()=>s,kt:()=>y});var n=o(7294);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function t(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?t(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function c(e,a){if(null==e)return{};var o,n,r=function(e,a){if(null==e)return{};var o,n,r={},t=Object.keys(e);for(n=0;n<t.length;n++)o=t[n],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)o=t[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var a=n.useContext(l),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},s=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},k="mdxType",z={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},w=n.forwardRef((function(e,a){var o=e.components,r=e.mdxType,t=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),k=p(o),w=r,y=k["".concat(l,".").concat(w)]||k[w]||z[w]||t;return o?n.createElement(y,i(i({ref:a},s),{},{components:o})):n.createElement(y,i({ref:a},s))}));function y(e,a){var o=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var t=o.length,i=new Array(t);i[0]=w;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c[k]="string"==typeof e?e:r,i[1]=c;for(var p=2;p<t;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}w.displayName="MDXCreateElement"},3693:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>z,frontMatter:()=>t,metadata:()=>c,toc:()=>p});var n=o(7462),r=(o(7294),o(3905));const t={},i="Kontenery",c={unversionedId:"software/containers",id:"software/containers",title:"Kontenery",description:"Konteneryzacja serwer\xf3w to technologia, kt\xf3ra pozwala na izolowanie i uruchamianie aplikacji oraz serwer\xf3w w odizolowanych \u015brodowiskach zwanych kontenerami. W tym artykule om\xf3wimy, dlaczego warto konteneryzowa\u0107 serwery, jakie s\u0105 dost\u0119pne technologie konteneryzacji, oraz przedstawimy przyk\u0142ad u\u017cycia popularnej platformy konteneryzacyjnej - Docker.",source:"@site/docs/software/containers.md",sourceDirName:"software",slug:"/software/containers",permalink:"/wiki/docs/software/containers",draft:!1,editUrl:"https://github.com/hlwiki/wiki/tree/main/docs/software/containers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Software",permalink:"/wiki/docs/category/software"},next:{title:"Hypervisors",permalink:"/wiki/docs/software/hypervisors"}},l={},p=[{value:"Dlaczego Konteneryzowa\u0107 Serwery?",id:"dlaczego-konteneryzowa\u0107-serwery",level:2},{value:"1. Bezpiecze\u0144stwo",id:"1-bezpiecze\u0144stwo",level:3},{value:"2. \u0141atwiejsze Aktualizacje",id:"2-\u0142atwiejsze-aktualizacje",level:3},{value:"3. Gotowe Obrazy Aplikacji w Docker",id:"3-gotowe-obrazy-aplikacji-w-docker",level:3},{value:"Technologie Konteneryzacji",id:"technologie-konteneryzacji",level:2},{value:"LXC (Linux Containers)",id:"lxc-linux-containers",level:3},{value:"Docker",id:"docker",level:3},{value:"Podman",id:"podman",level:3},{value:"Przyk\u0142ad U\u017cycia Dockera - Postawienie Serwera WWW nginx",id:"przyk\u0142ad-u\u017cycia-dockera---postawienie-serwera-www-nginx",level:2}],s={toc:p},k="wrapper";function z(e){let{components:a,...o}=e;return(0,r.kt)(k,(0,n.Z)({},s,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kontenery"},"Kontenery"),(0,r.kt)("p",null,"Konteneryzacja serwer\xf3w to technologia, kt\xf3ra pozwala na izolowanie i uruchamianie aplikacji oraz serwer\xf3w w odizolowanych \u015brodowiskach zwanych kontenerami. W tym artykule om\xf3wimy, dlaczego warto konteneryzowa\u0107 serwery, jakie s\u0105 dost\u0119pne technologie konteneryzacji, oraz przedstawimy przyk\u0142ad u\u017cycia popularnej platformy konteneryzacyjnej - Docker."),(0,r.kt)("h2",{id:"dlaczego-konteneryzowa\u0107-serwery"},"Dlaczego Konteneryzowa\u0107 Serwery?"),(0,r.kt)("h3",{id:"1-bezpiecze\u0144stwo"},"1. Bezpiecze\u0144stwo"),(0,r.kt)("p",null,"Konteneryzacja serwer\xf3w zapewnia znacznie wy\u017cszy poziom bezpiecze\u0144stwa w por\xf3wnaniu do tradycyjnych rozwi\u0105za\u0144. Ka\u017cdy kontener dzia\u0142a w izolowanym \u015brodowisku, co oznacza, \u017ce \u200b\u200bprocesy i zasoby s\u0105 ograniczone tylko do kontenera. To minimalizuje ryzyko przeniesienia zagro\u017ce\u0144 mi\u0119dzy aplikacjami i serwerami. Ponadto, kontenery s\u0105 trudniejsze do zainfekowania z\u0142o\u015bliwym oprogramowaniem, poniewa\u017c nawet w przypadku ataku, skala potencjalnej szkody jest ograniczona do jednego kontenera."),(0,r.kt)("h3",{id:"2-\u0142atwiejsze-aktualizacje"},"2. \u0141atwiejsze Aktualizacje"),(0,r.kt)("p",null,"Konteneryzacja u\u0142atwia zarz\u0105dzanie aktualizacjami oprogramowania. Ka\u017cda aplikacja lub us\u0142uga mo\u017ce by\u0107 uruchamiana w odr\u0119bnym kontenerze z w\u0142asnymi zale\u017cno\u015bciami. To oznacza, \u017ce aktualizacje jednej aplikacji nie wp\u0142ywaj\u0105 na reszt\u0119 systemu, co pozwala unikn\u0105\u0107 konflikt\xf3w mi\u0119dzy wersjami bibliotek i oprogramowania."),(0,r.kt)("h3",{id:"3-gotowe-obrazy-aplikacji-w-docker"},"3. Gotowe Obrazy Aplikacji w Docker"),(0,r.kt)("p",null,"Docker, jedna z popularnych platform konteneryzacyjnych, oferuje mo\u017cliwo\u015b\u0107 tworzenia gotowych obraz\xf3w aplikacji. Obraz jest zdefiniowan\u0105, niezmienn\u0105 jednostk\u0105, kt\xf3ra zawiera aplikacj\u0119 i wszystkie jej zale\u017cno\u015bci. Dzi\u0119ki temu mo\u017cna \u0142atwo przenie\u015b\u0107 aplikacje mi\u0119dzy r\xf3\u017cnymi \u015brodowiskami, zapewniaj\u0105c sp\xf3jno\u015b\u0107 i eliminuj\u0105c problemy z konfiguracj\u0105."),(0,r.kt)("h2",{id:"technologie-konteneryzacji"},"Technologie Konteneryzacji"),(0,r.kt)("p",null,"Istnieje wiele technologii konteneryzacji, ale dwie z nich wyr\xf3\u017cniaj\u0105 si\u0119 na tle innych: LXC (Linux Containers) i Docker (oraz Podman)."),(0,r.kt)("h3",{id:"lxc-linux-containers"},"LXC (Linux Containers)"),(0,r.kt)("p",null,"LXC jest technologi\u0105 konteneryzacji na poziomie systemu operacyjnego. Pozwala ona na uruchamianie izolowanych kontener\xf3w na jednym j\u0105drze Linux. LXC zapewnia dobre izolowanie zasob\xf3w, ale mo\u017ce wymaga\u0107 bardziej zaawansowanej konfiguracji ni\u017c Docker. Mo\u017cna si\u0119 spotka\u0107 z t\u0105 form\u0105 kontenaryzacji w Proxmox "),(0,r.kt)("h3",{id:"docker"},"Docker"),(0,r.kt)("p",null,"Docker to jedna z najpopularniejszych platform konteneryzacyjnych. Zapewnia prosty interfejs do zarz\u0105dzania kontenerami i obrazami aplikacji. Docker jest znany z \u0142atwo\u015bci u\u017cycia i obs\u0142ugi, co przyczyni\u0142o si\u0119 do jego ogromnej popularno\u015bci w\u015br\xf3d programist\xf3w i administrator\xf3w system\xf3w.",(0,r.kt)("br",{parentName:"p"}),"\n","Docker umo\u017cliwia tworzenie obrazu opisuj\u0105c go w Dockerfile, mo\u017ce on bazowa\u0107 na innym obrazie"),(0,r.kt)("p",null,"Przyk\u0142adowy Dockerfile dla aplikacji node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# Dockerfile\nFROM node:18-alpine\nWORKDIR /app\nCOPY . .\nRUN yarn install --production\nCMD ["node", "src/index.js"]\nEXPOSE 3000\n')),(0,r.kt)("p",null,"source: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/02_our_app/"},"https://docs.docker.com/get-started/02_our_app/")),(0,r.kt)("p",null,'Opisanie co ma si\u0119 znajdowa\u0107 w kontenerze u\u017cywaj\u0105c Dockerfile jest wymagane, poniewa\u017c by design, kontenery s\u0105 "stateless", czyli domy\u015blnie wszystkie zmiany s\u0105 utracone po restarcie - aby zachowa\u0107 dane na sta\u0142e, nale\u017cy podpi\u0105\u0107 do takiego kontenera volume lub zmapowa\u0107 lokalny folder'),(0,r.kt)("h3",{id:"podman"},"Podman"),(0,r.kt)("p",null,"Podman to narz\u0119dzie konteneryzacji, kt\xf3re jest kompatybilne z Dockerem, ale umo\u017cliwia uruchamianie kontener\xf3w rootless. Jest to technologia rozwijana przez Redhat."),(0,r.kt)("h2",{id:"przyk\u0142ad-u\u017cycia-dockera---postawienie-serwera-www-nginx"},"Przyk\u0142ad U\u017cycia Dockera - Postawienie Serwera WWW nginx"),(0,r.kt)("p",null,"Aby zilustrowa\u0107, jak \u0142atwo mo\u017cna u\u017cy\u0107 Dockera do konteneryzacji serwera, rozwa\u017cmy przyk\u0142ad postawienia serwera HTTP nginx."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Instalacja Dockera"),": Najpierw zainstaluj Dockera na ho\u015bcie.",(0,r.kt)("br",{parentName:"p"}),"\n","W przypadku Windowsa b\u0119dziesz musia\u0142 si\u0119 upewni\u0107 \u017ce wirtualizacja jest w\u0142\u0105czona w BIOS/UEFI oraz masz zainstalowane WSL2 (zamiast WSL mo\u017cna wykorzysta\u0107 Hyper-V)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Pobierz obraz nginx: U\u017cyj komendy Docker do pobrania gotowego obrazu serwera HTTP Nginx: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"docker pull nginx\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Uruchom kontener na podstawie pobranego obrazu, mapuj\u0105c porty tak, aby mo\u017cna by\u0142o przegl\u0105da\u0107 stron\u0119 internetow\u0105:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"docker run -d -p 80:80 nginx\n")),(0,r.kt)("p",{parentName:"li"}," Je\u017celi kontener pomy\u015blnie si\u0119 uruchomi, nginx b\u0119dzie dost\u0119pny po adresie ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:80")," lub adresie IP hosta (np. 192.168.0.12:80)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sprawd\u017a czy widzisz stron\u0119 testow\u0105 nginx - otw\xf3rz przegl\u0105dark\u0119 i wejd\u017a na adres IP serwera, aby zobaczy\u0107 dzia\u0142aj\u0105c\u0105 us\u0142ug\u0119 WWW obs\u0142ugiwan\u0105 przez kontener Nginx."))),(0,r.kt)("p",null,"Ten prosty przyk\u0142ad pokazuje, jak mo\u017cna \u0142atwo u\u017cy\u0107 Dockera do uruchomienia serwera WWW w kontenerze. Dzi\u0119ki konteneryzacji, zarz\u0105dzanie aplikacjami staje si\u0119 bardziej elastyczne, bezpieczne i skalowalne.\nOczywi\u015bcie Docker nie ogranicza si\u0119 tylko do uruchamiania pojedynczych kontener\xf3w, ale mo\u017cna r\xf3wnie\u017c zdefiniowa\u0107 ca\u0142\u0105 infrastruktur\u0119 u\u017cywa\u0107 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/08_using_compose/"},"docker-compose"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.freecodecamp.org/news/docker-mount-volume-guide-how-to-mount-a-local-directory/"},"zmapowa\u0107 lokalny folder do kontenera"),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/storage/volumes/"},"utworzy\u0107 sta\u0142y volume")," (domy\u015blnie pliki kt\xf3re si\u0119 zmieni\u0105 w kontenerze b\u0119d\u0105 utracone przy restarcie!), ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/network/"},"po\u0142\u0105czy\u0107 je w wewn\u0119trznych sieciach"),", uruchomi\u0107 wiele replik aplikacji (np. u\u017cywaj\u0105c docker swarm)"),(0,r.kt)("p",null,"Konteneryzacja serwer\xf3w staje si\u0119 coraz bardziej powszechna, pomagaj\u0105c organizacjom osi\u0105gn\u0105\u0107 efektywniejsze zarz\u0105dzanie infrastruktur\u0105 i aplikacjami. Dzi\u0119ki izolacji i sp\xf3jno\u015bci, kontenery oferuj\u0105 zalety bezpiecze\u0144stwa i zarz\u0105dzania, kt\xf3re przyci\u0105gaj\u0105 coraz wi\u0119cej u\u017cytkownik\xf3w. Warto eksplorowa\u0107 r\xf3\u017cne technologie konteneryzacji, aby wybra\u0107 najlepiej dopasowan\u0105 do konkretnych potrzeb rozwi\u0105zanie."))}z.isMDXComponent=!0}}]);