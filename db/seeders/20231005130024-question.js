'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          textQuestion: 'Что это за персонаж?',
          imgQuestion:
            'https://sun9-15.userapi.com/impg/036HJ26eVn9YVx8Sdk61gPC6to4iRogWmEF2SA/Lob3w1uTIfE.jpg?size=2048x2048&quality=96&sign=3e293f544eadf4491e98002deba54348&type=album',
          textAnswer: 'Круэлла',
          imgAnswer:
            'https://sun9-26.userapi.com/impg/3CPAQROCbZF6p5DnpEIUZhNOCfPfZO45Ls2yAw/T3l_ijOd-cg.jpg?size=2048x2048&quality=96&sign=256ba712edf8a171a6c719b26b85269f&type=album',
          idTheme: 1,
          questionPrice: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          textQuestion: 'Что это за персонаж?',
          imgQuestion:
            'https://sun9-24.userapi.com/impg/4-SAvQv-6CXITSUwsVJC4olyXoK7QSfMgcbVqg/H6-uymQZgSM.jpg?size=2048x2048&quality=96&sign=646462b2194486e359c18f1f8b60266b&type=album',
          textAnswer: 'Гендальф',
          imgAnswer:
            'https://sun9-40.userapi.com/impg/DU6slSPyAgmx6zeBjKzLa3oN2FeGw7ic1gAeOA/vAiYMOb-F7Y.jpg?size=2048x2048&quality=96&sign=316f9ff9226202b2f563745054d436df&type=album',
          idTheme: 1,
          questionPrice: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          textQuestion: 'Что это?',
          imgQuestion:
            'https://sun9-39.userapi.com/impg/qLNSNdAhidEHhMtCqRaBY9NXzK61WTJQg33vqA/4LStXJEkipg.jpg?size=2048x2048&quality=96&sign=cc8c2ee89b8702b1dba8b360b1d42e9f&type=album',
          textAnswer: 'IE',
          imgAnswer:
            'https://psv4.userapi.com/c909218/u251391591/docs/d20/d9b66eda6d1b/IE.jpg?extra=FJJCgtaNZ7ieLkijzt7T39UctfrhJQtOuq8jJt3Z39bOv9cMQqokXJuxXnxmljcQ8RbrwdoXM-z7fd7U1ETjVHRck2XmUe5N6DGU8lBQ8SRUO4JVOQ8c6bETa5APdPurP2rJwmpMcWu19VdDra340KDiWw',
          idTheme: 1,
          questionPrice: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          textQuestion: 'Что это за персонаж?',
          imgQuestion:
            'https://psv4.userapi.com/c909218/u251391591/docs/d40/64a46272b796/gp__kopia.jpg?extra=8dbrmONDOBzeO6MNhAtRnQArr8RR6XU5gXmPafvSC2Ur5RoKzkhI4_0LRQKcwRUyT2bEkNy9OvoVIDQu_CYWkh7F1vCvV3Hl0wcZcXoaFovpRLx1F-BwLm99b0oI5MYFiz0GD0JqZdgdkjdKZt1TqG9OLQ',
          textAnswer: 'Гарри Поттер',
          imgAnswer:
            'https://psv4.userapi.com/c909218/u251391591/docs/d31/d464d5c1f698/gp.jpg?extra=nZAhVEJSkTFkRe_ATRpbhigmCcuPDJMfpiUYARRjTjmpzJZTjwfne-3k_3CZpPsfH2j6sgXniOA3ZdVZMbofcjNf_jSUVjTO2Oa6DQ-vKjQAqHtm6QzRdD_S64VHjeZxWZ1f1MGjNsGY3Wfr9r9vy1JpwQ',
          idTheme: 1,
          questionPrice: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          textQuestion: 'Что это за персонаж?',
          imgQuestion:
            'https://psv4.userapi.com/c909218/u251391591/docs/d19/bdc3093ebc2c/matrix__kopia.jpg?extra=PazFjgIAeXzXK1IBvsl2L7e6xTqrzaeNS5Bh5oG2dHmuigENPCtiwFzSZ3_v36eRYFPGwMxHCA8n3nHiCYJ5EDLLW_baQD_iHndZks7WCCTXd4oHh9xFXomYpYlOntadF3JbCes3-hUCdBDwb8vl8xyUYw',
          textAnswer: 'Нео',
          imgAnswer:
            'https://psv4.userapi.com/c909218/u251391591/docs/d57/bf0aebf3ef1a/matrix.jpg?extra=ENv25qdzxbtX-htN978OP_TrlrG-660aWfEDd00K4KMpv1aVmP4nKC-wx7X_dZo_A_vzg3cfa2O_DcD-0t9vD9LW6IyAdIjyn0ui0IaVZYOwT3iOmj4URiQxTHAv4-nMxbN3kspbiYNyrXmmv20ttEqcBg',
          idTheme: 1,
          questionPrice: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          textQuestion: 'Откуда этот персонаж?',
          imgQuestion:
            'https://psv4.userapi.com/c909218/u251391591/docs/d29/214e83587b83/sf__kopia.jpg?extra=5_YtW5XtK6CA9gyq6c7RdxddxAngTQV5ozOholKmPEuRiXsZV8F1BBBi45PNJZKCMefGnweJ7lnqtP6XvKrcS-IFqUO_AC3KTlYEBx-pSQrF_EyzEdFDDip0f8432fqT-0iJ2TjdSv0AZ9_VIFV9HrDJRg',
          textAnswer: 'Street fighter',
          imgAnswer:
            'https://psv4.userapi.com/c909218/u251391591/docs/d43/f6a107d2758f/sf.jpg?extra=KoWfaI7KNy1cRTMIUqkhGM3w3VI4moqmyJ-6qW3BShpFTsmHnrC-WM4crNG8L_9H1EucIGOSUrM4qNUplupflCYthVqRDvzrnczh-buXHa5ht6Gp2icm345xFTkQF86yOWuGEC-LIm_ndUqFXaB0lQsW6g',
          idTheme: 1,
          questionPrice: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          textQuestion: 'Что это за фильм?',
          imgQuestion:
            'https://psv4.userapi.com/c909218/u251391591/docs/d50/d4d6d73565e7/titanic__kopia.jpg?extra=tss7NVSODH59ABn1i_LpqLBgZzU7_KVsCex7jh1_JvTjND4gFUmGtaJ7tZreXt_mcxPYFsS0Tdy-AB2BEUNwvtCLrzrmn7POHdeBNgig1RkScZZt292NO4MjEDI_d8_1AOOKXRgRUSfptL2Xt0Oen6ltjg',
          textAnswer: 'Титаник',
          imgAnswer:
            'https://psv4.userapi.com/c909218/u251391591/docs/d53/74379b97f840/titanic.jpg?extra=EcWMgi3I52yd4jNH-wIikTaK7iJp3Pj-PUhw41i9MDyOCzQryHO6_n4jJ67QivQaNL4YFtEko_1-pQl3Toj5g-B4f1X8IBACbBuWT-ckNYPU5yoO0zya9xF3G4nGS359wkMZzk7BFz_W819jljzSfYTRQQ',
          idTheme: 1,
          questionPrice: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          textQuestion: 'Что говорит котик?',
          imgQuestion:
            'https://cs12.pikabu.ru/post_img/2019/04/15/9/1555339015135017638.jpg',
          textAnswer: 'Ъуъ',
          idTheme: 2,
          questionPrice: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          textQuestion: 'Девочке сказали, что они поедут в ___?',
          imgQuestion:
            'https://n1s1.hsmedia.ru/2d/bb/59/2dbb592e52fa8097a87fdd06b257024b/728x542_1_d6c9f4bf3ce0a16cb21e629f4791006c@1000x745_0xac120003_4496499681562658319.jpg',
          textAnswer: 'Диснейленд',
          idTheme: 2,
          questionPrice: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          textQuestion: 'Из какого фильма этот кадр?',
          imgQuestion: 'https://slovaroid.ru/uploads/images/enakin-i-padme-mem.jpg',
          textAnswer: 'Звездные войны',
          idTheme: 2,
          questionPrice: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          textQuestion: 'Что говорят эти коты?',
          imgQuestion: 'https://trademark-support.ru/upload/iblock/e1c/e1cdef1a6728691a174450b31d8df730.jpg',
          textAnswer: 'Наташ вставай',
          idTheme: 2,
          questionPrice: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          textQuestion: 'Что говорит собака?',
          imgQuestion: 'https://sun9-1.userapi.com/impg/RdHv1wGorsTy8ONBhUpX702oajsgjJ0nIrd5Yg/6UUtUvo1vZU.jpg?size=578x284&quality=95&sign=aef149ca08aa6f6ed0579bc056439242&type=album',
          textAnswer: 'This is fine',
          imgAnswer: 'https://user92966.clients-cdnnow.ru/upload/setka-editor/35f/35f108df97941650e0b55c8b71e9d88c.png?1575736506285878',
          idTheme: 2,
          questionPrice: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          textQuestion: 'Что говорит Каневский?',
          imgQuestion: 'https://memepedia.ru/wp-content/uploads/2017/05/1393678845_1972029702.jpeg',
          textAnswer: 'Но это уже совсем другая история',
          idTheme: 2,
          questionPrice: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          textQuestion: 'Из какой игры этот мем?',
          imgQuestion: 'https://www.meme-arsenal.com/memes/84a1fd7278a3a4211ebfe72c0da4d491.jpg',
          textAnswer: 'Герои 3',
          idTheme: 2,
          questionPrice: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
