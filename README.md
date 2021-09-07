# 🕓 Romentum (시간, 날씨, TodoList 앱)

javascript를 강의로 배우면서 제일 처음으로 만든 프로젝트 입니다.
해당 앱은 Momentum이라는 크롬 확장앱을 클론한 프로젝트이며, Nomadcoder 강의에서 해당 클론 강의를 제공하고 있습니다. 저는 강의에서 끝나지 않고 처음으로 기능을 추가해 보았습니다.

<br/>

## 화면

<br/>

## 추가한 기능

<br/>

- input 값 체크를 통한 안정성 확보
  - 빈값의 todo는 올라가지 않게하기
  - storage에 user가 삭제되는 경우 todolist도 삭제되고 초기화 하기
- Open Weather API의 날씨 아이콘 연동하기

<br/>

## 사용 기술

- HTML
- JS
- CSS

<br/>

## 배포와 빌더(gh-pages, Parcel)

- 추가적으로 배포는 최근에 하였습니다. 배포를 위한 builder로 parcel를 사용하였습니다.
- React와 친숙한 저로서는 CRA가 모두 환경을 맞추어주어서 내부적으로 webpack으로 build 해줘서 편했지만, React 프로젝트가 아닌 관계로 parcel로 build 해 보면서, 여러가지 문제가 발생했고 해결하여 배포에 성공했습니다.
- Parcel의 경우 매우 빠르고 가벼운 builder로 알려져 있어서 활용하게 되었으며, Parcel 사용중 gh-pages로 배포를 하다보니 public 경로 문제가 발생하여 애를 먹었습니다. Parcel에서 제공하는 `--public-url ` 옵션을 사용하여 해결하였습니다.
