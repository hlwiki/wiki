---
sidebar_position: 2
---
# Jak dodać artykuł od siebie?

Homelab Wiki wykorzystuje repozytorium Git jako bazę danych dla wszystkich artykułów - następnie przy każdej aktualizacji głównej gałęzi budowana jest statyczna wersja webowa (używając CICD).  
Dzięki wykorzystaniu git oraz budowaniu statycznej strony  
* Zmiany są transparentne (zawsze można sprawdzić kto wprowadził jakie zmiany)
* Każdy może zaproponować swoje zmiany oraz inne osoby mogą je ocenić przed połączeniem
* Nie potrzebujemy utrzymywać serwerów (poza CICD dla automatyzacji), wystarczy Github Pages lub najprostszy hosting który umożliwia serwowanie plików HTML/JS/CSS
* Bardzo prosto można zrobić lokalną, offlinową kopie (po prostu używając `git clone`)

Co prawda ma to też swoje wady - użytkownik który chce dodać swoje zmiany musi najpierw rozumieć jeszcze podstawy jak działa `git`, jednak w świecie homelab nie uważałbym tego za wadę, bo realnie ktoś będzie musiał poznać rozwiązanie wersjonowania kodu wcześniej czy później.

Artykuły na wiki są pisane używając formatowania Markdown - podstawowy cheatsheet możesz znaleźć na [https://learn-markdown.github.io/](https://learn-markdown.github.io/) lub możesz podejrzeć [dokładnie ten artykuł w repozytorium](https://github.com/hlwiki/wiki/blob/main/docs/contribute.md) (aby zobaczyć jego "surową" wersje musisz kliknąć na "Edit file" lub "Raw").  
Do edytowania plików markdown (.md) możesz użyć dowolnego edytora, nawet systemowego notatnika, polecam użycie Visual Studio Code, chociażby przez możliwość włączenia podglądu na żywo (ctrl+shift+v) - jednak edytor nie ma tutaj zupełnie znaczenia.

### Krok 0: Konfiguracja GIT na swoim komputerze

Krokiem zerowym będzie konfiguracja klienta git na swoim komputerze - będzie się to różniło w zależności od systemu operacyjnego - więcej możesz przeczytać na [https://github.com/git-guides/install-git](https://github.com/git-guides/install-git)

### Krok 1: Stworzenie kopii repozytorium (fork)

Pierwszym krokiem jest stworzenie własnej kopii repozytorium, które chcesz zmodyfikować. Ten proces nazywa się "forkowaniem". Oto jak to zrobić:

1. Odwiedź stronę repozytorium na github - [https://github.com/hlwiki/wiki](https://github.com/hlwiki/wiki)

1. W prawym górnym rogu ekranu znajdź przycisk "Fork" (pomiędzy przyciskami "Star" oraz "Watch"). Kliknij go.
GitHub utworzy teraz kopię repozytorium w Twoim własnym koncie. Będziesz mógł pracować na swoim własnym forku niezależnie od oryginalnego repozytorium.

### Krok 2: Sklonowanie repozytorium na swój komputer

Teraz, gdy masz własny fork, musisz sklonować go na swój komputer, aby wprowadzić zmiany. Oto jak to zrobić:

1. Przejdź do swojego forka na GitHubie.

1. Znajdź zielony przycisk "Code" i kliknij go. Skopiuj link do repozytorium.

1. Otwórz terminal na swoim komputerze i przejdź do katalogu, w którym chcesz przechować kopię repozytorium.

1. Uruchom polecenie `git clone` i wklej adres SSH swojego forka. Potrzebujesz do tego mieć zainstalowny klient `git` na komputerze oraz skonfigurowany klucz SSH, więcej informacji możesz znaleźć w [docach githuba](https://docs.github.com/en/authentication/connecting-to-github-with-ssh). Wygląda to mniej więcej tak:
```
git clone https://github.com/TwojeUsername/nazwa-repozytorium.git
```


Alternatywnie, zamiast klonować repozytorium na swój komputer, możesz wykorzystać wbudowany w github Visual Studio Code w wersji web - wystarczy że klikniesz kropkę będąc w swoim repozytorium lub zamienisz w adresie github.**com** na github.**dev** (powinno to wyglądać następująco "https://github.com/hlwiki/wiki").


Teraz masz lokalną kopię swojego forka repozytorium na swoim komputerze.

### Krok 3: Tworzenie i pracowanie na branchach

Branch to odgałęzienie od głównej linii rozwoju repozytorium, które pozwala na pracę nad zmianami niezależnie od innych. Tworzenie brancha jest dobrym praktyką, ponieważ można uniknąć konfliktów i utrzymać porządek w repozytorium. Oto jak to zrobić:

1. Otwórz terminal i przejdź do katalogu swojego sklonowanego repozytorium.

1. Aby utworzyć nowy branch, użyj polecenia git checkout -b i nadaj mu nazwę. Na przykład:
```
git checkout -b hardware/fujitsu_s920
```

Dobrą praktyką jest aby w nazwie brancha była informacja czego dotyczą zmiany na danym branchu, np.
* software/proxmox
* hardware/dell_3040
* software/sso_auth

1. Teraz możesz wprowadzać zmiany w swoim branchu. Przejdź do odpowiedniego pliku w folderze `docs`.  
Jeżeli chcesz stworzyć nowy artykuł (np. o sprzęcie którego producent jeszcze nie jest dodany), utwórz katalogi w podobnym stylu jak to jest w innych przypadkach. Czyli przykładowo artykuł o PiHole powinien znaleźć się w `docs/software/pihole.md`

1. Po zakończeniu prac nad zmianami, użyj polecenia `git add .` i `git commit -m "opis zmian"`, aby zatwierdzić zmiany w swoim branchu.

:::note

`git add .` doda wszystkie zmiany do "staged changes", a komendą `git commit -m "opis"` możesz opisać co w danym commit się zmieniło

:::

1. Po stworzeniu commita, musisz te zmiany spushować do swojego repozytorium, w tym celu użyj komendy `git push origin`

:::tip

Przed spushowaniem swoich zmian oraz otworzeniem Pull Request najlepiej sprawdzić czy twoje zmiany wyglądają poprawnie na wiki (np. jeżeli używasz dodatkowych funkcji Docusaurusa, typu admonitions)

:::

### Krok 4: Tworzenie Pull Request (PR)

Kiedy skończysz pracować nad swoimi zmianami i jesteś gotowy, aby dołączyć je do oryginalnego repozytorium, musisz stworzyć Pull Request. Oto jak to zrobić:

1. Przejdź do strony swojego forka na GitHubie.
1. Na górze strony zobaczysz informację o nowym commicie w Twoim branchu. Obok tej informacji będzie przycisk "Compare & pull request". Kliknij go.
1. GitHub wyświetli stronę, na której opiszesz swoje zmiany. Upewnij się, że opis jest zrozumiały i zawiera wszelkie niezbędne informacje.
1. Kliknij przycisk "Create pull request". Teraz Twoje zmiany zostały zaproponowane do oryginalnego repozytorium.
1. Właściciel oryginalnego repozytorium może zrecenzować Twoje zmiany i zaakceptować je, lub poprosić o dodatkowe poprawki.
1. Po zaakceptowaniu zmian, Twoje Pull Request zostanie scalone z głównym repozytorium.

Gratulacje! Teraz wiesz, jak zaproponować zmiany w repozytorium GitHub za pomocą forka, branchy i Pull Requestów. To podstawy współpracy na GitHubie, które przydadzą Ci się w pracy nad projektami open source oraz w innych projektach programistycznych.