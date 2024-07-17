interface RouteData {
  title: string;
  preview: string;
  like: number;
  comment: number;
  date: string;
}

export const routeData: RouteData[] = [
  {
    title: '루트 제목이 들어가는 곳입니다.',
    preview: '간략한 상세 내용이 들어가ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ',
    like: 10,
    comment: 5,
    date: '2021.09.01',
  },
  {
    title: '다른 루트 제목이 들어가는 곳입니다.',
    preview: '또 다른 간략한 상세 내용이 들어가ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ',
    like: 15,
    comment: 3,
    date: '2021.09.02',
  },
  {
    title: '루트 제목이 들어가는 곳입니다.',
    preview: '간략한 상세 내용이 들어가',
    like: 10,
    comment: 5,
    date: '2021.09.01',
  },
  {
    title: '다른 루트 제목이 들어가는 곳입니다.',
    preview: '또 다른 간략한 상세 내용이 들어가',
    like: 15,
    comment: 3,
    date: '2021.09.02',
  },
];
