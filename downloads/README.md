# Downloads

Coloca aqui os ficheiros APK do OmniKar:

| Ficheiro | Descrição |
|---|---|
| `OmniKar-latest.apk` | Ligação simbólica (ou cópia) da versão mais recente do APK |
| `OmniKar-1.0.XX.apk` | APK versionado com o número de versão correspondente |

O ficheiro `OmniKar-latest.apk` deve ser uma cópia do APK da versão mais recente.
Ele é usado como link principal de download no site.

---

## Adicionar um novo APK

1. Gera o APK do projeto OmniKar (Release > Android)
2. Copia o APK para esta pasta
3. Renomeia para `OmniKar-X.Y.Z.apk` (substitui com o número da versão)
4. Atualiza o `OmniKar-latest.apk` com uma cópia do mesmo ficheiro
5. Atualiza o `version.json` na raiz do repo com:
   - `latestVersion`: o novo número de versão
   - `apkFiles.versioned`: o nome do ficheiro versionado
   - `date`: data de publicação
   - Adiciona uma entrada em `changelog`
