import features1 from '/public/images/features1.png';
import features2 from '/public/images/features2.png';
import features3 from '/public/images/features3.png';

const arr: {
  id: number,
  title: string,
  content: string,
  align: string,
  image: string,
  width: number,
  height: number;
}[] = [
    {
      id: 1,
      title: "Централизованные диалоги с учениками",
      content: "Вся коммуникация с учениками теперь в одном месте. Чаты, обсуждения, вопросы и ответы - все это доступно нашим пользователям, обеспечивая удобство и эффективность общения.",
      align: "right",
      image: features1.src,
      height: features1.height,
      width: features1.width
    },
    {
      id: 2,
      title: "Создание домашних заданий",
      content: "Не нужно тратить время на перенос заданий из одного места в другое. Наша платформа позволяет создавать домашние задания прямо на сайте, делая процесс обучения более структурированным и удобным.",
      align: "left",
      image: features2.src,
      height: features2.height,
      width: features2.width
    },
    {
      id: 3,
      title: "Проверка домашних занятий",
      content: "Наша платформа позволяет проверять выполнение заданий и оценивать успехи учеников прямо на сайте. Это удобное средство контроля, которое поможет поддерживать учебный процесс под контролем.",
      align: "right",
      image: features3.src,
      height: features3.height,
      width: features3.width
    }
  ];

export default arr;
