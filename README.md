# node-nfd2nfc
File rename for NFD Unicode characters to NFC

> 윈도우에서 사용하기 위해 작성된 코드이며 모든 테스트는 Windows 10 에서 수행되었습니다.

## 테스트용 폴더와 파일 생성

```
mkdir "%USERPROFILE%\Downloads\node-nfd2nfc\test"
echo "1" > "%USERPROFILE%\Downloads\nfd2nfc\test\ABC_경영_1.txt"
echo "1" > "%USERPROFILE%\Downloads\nfd2nfc\test\ABC_경영_2.txt"
```

## 실행

```
node "%USERPROFILE%\Downloads\node-nfd2nfc\nfd2nfc.js" "%USERPROFILE%\\Downloads\\node-nfd2nfc\\test\\"
```
