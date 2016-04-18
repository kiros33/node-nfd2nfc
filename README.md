# node-nfd2nfc
File rename for NFD Unicode characters to NFC

> 윈도우에서 사용하기 위해 작성된 코드이며 모든 테스트는 Windows 10 에서 수행되었습니다.
> 아래 명령어를 복사해서 파일을 생성하면 자모가 분리된 파일을 생성할 수 있습니다.

## 옵션처리 [optimist](https://github.com/substack/node-optimist)

require('optimist')
```
Options:
  -d, --directory  [required]  [default: "."]
  -r, --recursive
```

## 테스트용 폴더와 파일 생성

```
mkdir "%USERPROFILE%\Downloads\node-nfd2nfc\test"
echo "1" > "%USERPROFILE%\Downloads\node-nfd2nfc\test\ABC_경영_1.txt"
echo "1" > "%USERPROFILE%\Downloads\node-nfd2nfc\test\ABC_경영_2.txt"
mkdir "%USERPROFILE%\Downloads\node-nfd2nfc\test\NFC폴더"
echo "1" > "%USERPROFILE%\Downloads\node-nfd2nfc\test\NFC폴더\ABC_경영_1.txt"
echo "1" > "%USERPROFILE%\Downloads\node-nfd2nfc\test\NFC폴더\ABC_경영_2.txt"
mkdir "%USERPROFILE%\Downloads\node-nfd2nfc\test\NFD폴더"
echo "1" > "%USERPROFILE%\Downloads\node-nfd2nfc\test\NFD폴더\ABC_경영_1.txt"
echo "1" > "%USERPROFILE%\Downloads\node-nfd2nfc\test\NFD폴더\ABC_경영_2.txt"
```

## 폴더 변환 실행

```
node nfd2nfc.js -d "%USERPROFILE%\\Downloads\\node-nfd2nfc\\test\\"
```

## 폴더 변환 실행 (Recursive)

```
node nfd2nfc.js -d "%USERPROFILE%\\Downloads\\node-nfd2nfc\\test\\" -r
```
