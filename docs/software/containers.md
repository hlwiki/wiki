# Kontenery

Konteneryzacja serwerów to technologia, która pozwala na izolowanie i uruchamianie aplikacji oraz serwerów w odizolowanych środowiskach zwanych kontenerami. W tym artykule omówimy, dlaczego warto konteneryzować serwery, jakie są dostępne technologie konteneryzacji, oraz przedstawimy przykład użycia popularnej platformy konteneryzacyjnej - Docker.

## Dlaczego Konteneryzować Serwery?

### 1. Bezpieczeństwo
Konteneryzacja serwerów zapewnia znacznie wyższy poziom bezpieczeństwa w porównaniu do tradycyjnych rozwiązań. Każdy kontener działa w izolowanym środowisku, co oznacza, że ​​procesy i zasoby są ograniczone tylko do kontenera. To minimalizuje ryzyko przeniesienia zagrożeń między aplikacjami i serwerami. Ponadto, kontenery są trudniejsze do zainfekowania złośliwym oprogramowaniem, ponieważ nawet w przypadku ataku, skala potencjalnej szkody jest ograniczona do jednego kontenera.

### 2. Łatwiejsze Aktualizacje
Konteneryzacja ułatwia zarządzanie aktualizacjami oprogramowania. Każda aplikacja lub usługa może być uruchamiana w odrębnym kontenerze z własnymi zależnościami. To oznacza, że aktualizacje jednej aplikacji nie wpływają na resztę systemu, co pozwala uniknąć konfliktów między wersjami bibliotek i oprogramowania.

### 3. Gotowe Obrazy Aplikacji w Docker
Docker, jedna z popularnych platform konteneryzacyjnych, oferuje możliwość tworzenia gotowych obrazów aplikacji. Obraz jest zdefiniowaną, niezmienną jednostką, która zawiera aplikację i wszystkie jej zależności. Dzięki temu można łatwo przenieść aplikacje między różnymi środowiskami, zapewniając spójność i eliminując problemy z konfiguracją.

## Technologie Konteneryzacji

Istnieje wiele technologii konteneryzacji, ale dwie z nich wyróżniają się na tle innych: LXC (Linux Containers) i Docker (oraz Podman).

### LXC (Linux Containers)
LXC jest technologią konteneryzacji na poziomie systemu operacyjnego. Pozwala ona na uruchamianie izolowanych kontenerów na jednym jądrze Linux. LXC zapewnia dobre izolowanie zasobów, ale może wymagać bardziej zaawansowanej konfiguracji niż Docker. Można się spotkać z tą formą kontenaryzacji w Proxmox 

### Docker
Docker to jedna z najpopularniejszych platform konteneryzacyjnych. Zapewnia prosty interfejs do zarządzania kontenerami i obrazami aplikacji. Docker jest znany z łatwości użycia i obsługi, co przyczyniło się do jego ogromnej popularności wśród programistów i administratorów systemów.  
Docker umożliwia tworzenie obrazu opisując go w Dockerfile, może on bazować na innym obrazie

Przykładowy Dockerfile dla aplikacji node
```
# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]
EXPOSE 3000
```
source: [https://docs.docker.com/get-started/02_our_app/](https://docs.docker.com/get-started/02_our_app/)

Opisanie co ma się znajdować w kontenerze używając Dockerfile jest wymagane, ponieważ by design, kontenery są "stateless", czyli domyślnie wszystkie zmiany są utracone po restarcie - aby zachować dane na stałe, należy podpiąć do takiego kontenera volume lub zmapować lokalny folder

### Podman

Podman to narzędzie konteneryzacji, które jest kompatybilne z Dockerem, ale umożliwia uruchamianie kontenerów rootless. Jest to technologia rozwijana przez Redhat.

## Przykład Użycia Dockera - Postawienie Serwera WWW nginx

Aby zilustrować, jak łatwo można użyć Dockera do konteneryzacji serwera, rozważmy przykład postawienia serwera HTTP nginx.

1. **Instalacja Dockera**: Najpierw zainstaluj Dockera na hoście.  
W przypadku Windowsa będziesz musiał się upewnić że wirtualizacja jest włączona w BIOS/UEFI oraz masz zainstalowane WSL2 (zamiast WSL można wykorzystać Hyper-V)

2. Pobierz obraz nginx: Użyj komendy Docker do pobrania gotowego obrazu serwera HTTP Nginx: 
   ```
   docker pull nginx
   ```

3. Uruchom kontener na podstawie pobranego obrazu, mapując porty tak, aby można było przeglądać stronę internetową:
   ```
   docker run -d -p 80:80 nginx
   ```
    Jeżeli kontener pomyślnie się uruchomi, nginx będzie dostępny po adresie `localhost:80` lub adresie IP hosta (np. 192.168.0.12:80)

4. Sprawdź czy widzisz stronę testową nginx - otwórz przeglądarkę i wejdź na adres IP serwera, aby zobaczyć działającą usługę WWW obsługiwaną przez kontener Nginx.

Ten prosty przykład pokazuje, jak można łatwo użyć Dockera do uruchomienia serwera WWW w kontenerze. Dzięki konteneryzacji, zarządzanie aplikacjami staje się bardziej elastyczne, bezpieczne i skalowalne.
Oczywiście Docker nie ogranicza się tylko do uruchamiania pojedynczych kontenerów, ale można również zdefiniować całą infrastrukturę używać [docker-compose](https://docs.docker.com/get-started/08_using_compose/), [zmapować lokalny folder do kontenera](https://www.freecodecamp.org/news/docker-mount-volume-guide-how-to-mount-a-local-directory/), [utworzyć stały volume](https://docs.docker.com/storage/volumes/) (domyślnie pliki które się zmienią w kontenerze będą utracone przy restarcie!), [połączyć je w wewnętrznych sieciach](https://docs.docker.com/network/), uruchomić wiele replik aplikacji (np. używając docker swarm)

Konteneryzacja serwerów staje się coraz bardziej powszechna, pomagając organizacjom osiągnąć efektywniejsze zarządzanie infrastrukturą i aplikacjami. Dzięki izolacji i spójności, kontenery oferują zalety bezpieczeństwa i zarządzania, które przyciągają coraz więcej użytkowników. Warto eksplorować różne technologie konteneryzacji, aby wybrać najlepiej dopasowaną do konkretnych potrzeb rozwiązanie.
