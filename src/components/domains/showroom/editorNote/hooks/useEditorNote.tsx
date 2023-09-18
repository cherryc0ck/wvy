import EditorNote from "../EditorNote";

const EDITOR_NOTE_LIST = [
  {
    src: "/images/showroom/editorNote/editor1.jpg",
    name: "editor1",
    label: "미리 준비하는 가을",
    theme: ["크로스백", "가죽", "올블랙", "샌들"],
  },
  {
    src: "/images/showroom/editorNote/editor2.jpg",
    name: "editor2",
    label: "트렌치코트의 정석",
    theme: ["트렌치 코트", "앞머리", "글로시"],
  },
  {
    src: "/images/showroom/editorNote/editor3.jpg",
    name: "editor3",
    label: "가을 코트 무드",
    theme: ["선글라스", "가죽", "메신저백", "롱코트"],
  },
  {
    src: "/images/showroom/editorNote/editor4.jpg",
    name: "editor4",
    label: "뮤지션 미노이가 입는 캐주얼",
    theme: ["볼캡", "크롭셔츠", "벨트", "스티치"],
  },
  {
    src: "/images/showroom/editorNote/editor5.jpg",
    name: "editor5",
    label: "페미닌 미니멀",
    theme: ["원피스", "화이트", "소재", "글로시"],
  },
  {
    src: "/images/showroom/editorNote/editor6.jpg",
    name: "editor6",
    label: "페미닌한 모노톤",
    theme: ["원피스", "니트", "블랙", "숄더백"],
  },
  {
    src: "/images/showroom/editorNote/editor7.jpg",
    name: "editor7",
    label: "가을 마라톤에 아식스",
    theme: ["아식스", "볼카야14", "마라톤", "쿠션"],
  },
  {
    src: "/images/showroom/editorNote/editor8.jpg",
    name: "editor8",
    label: "블랙으로 꾸며보기",
    theme: ["데님", "롱스커트", "워싱", "숄더백"],
  },
  {
    src: "/images/showroom/editorNote/editor9.jpg",
    name: "editor9",
    label: "올블랙으로 무난하게",
    theme: ["블랙", "카디건", "플랫슈즈", "골드"],
  },
  {
    src: "/images/showroom/editorNote/editor10.jpg",
    name: "editor10",
    label: "사무실 보호색룩",
    theme: ["블라우스", "데님", "숄더백", "샌들"],
  },
];

export default function useEditorNote() {
  return {
    editorNoteList: EDITOR_NOTE_LIST,
  };
}
