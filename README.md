# node-nfd2nfc
File rename for NFD Unicode characters to NFC

맥을 사용하면서 겪는 큰 고충중 하나가 파일명의 한글 자모가 깨어진 상태로 클라우드나 윈도우에 전송되는 경우일껍니다.
윈도우에 Node가 설치된 경우 사용할 수 있도록 깨진한글 파일/폴더를 복원하는 스크립트를 만들어봤습니다.

| 변환 전 |
| ------------- |
| ![NFD파일](http://postfiles4.naver.net/20160401_67/kiros33_1459485888998AxrgL_PNG/Screenshot_2016-04-01_13.40.22.png?type=w773 "NFD 파일 탐색") |

| 변환 후 |
| ------------- |
| ![NFC파일](http://postfiles11.naver.net/20160401_250/kiros33_1459485889377hQlaU_PNG/Screenshot_2016-04-01_13.41.56.png?type=w773 "NFC 파일 탐색") |

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
