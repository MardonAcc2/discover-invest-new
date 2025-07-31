import React from 'react'
export const jobData = [
    {
      title: "Инженер ПТО",
      total: 7,
      approved: 4,
      invited: 1,
      waiting: 0,
      date: "2025-07-18",
      status: "Активный",
    },
    {
      title: "Специалист по общим вопросам",
      total: 2,
      approved: 0,
      invited: 0,
      waiting: 0,
      date: "2025-07-18",
      status: "Активный",
    },
    {
      title: "Монтажник электросети",
      total: 34,
      approved: 20,
      invited: 5,
      waiting: 1,
      date: "2025-06-21",
      status: "Активный",
    },
    {
      title: "Агент по слежению",
      total: 4,
      approved: 2,
      invited: 0,
      waiting: 0,
      date: "2025-07-18",
      status: "Активный",
    },
    {
      title: "Энергетик",
      total: 4,
      approved: 1,
      invited: 1,
      waiting: 0,
      date: "2025-07-18",
      status: "Активный",
    },
    {
      title: "Рабочий по ремонту контейнеров",
      total: 23,
      approved: 13,
      invited: 2,
      waiting: 2,
      date: "2025-06-21",
      status: "Активный",
    },
    {
      title: "Сантехник",
      total: 17,
      approved: 9,
      invited: 1,
      waiting: 1,
      date: "2025-07-18",
      status: "Активный",
    },
    {
      title: "Геодезист",
      total: 4,
      approved: 1,
      invited: 0,
      waiting: 0,
      date: "2025-07-18",
      status: "Активный",
    },
    {
      title: "Заведующий складом",
      total: 14,
      approved: 5,
      invited: 2,
      waiting: 0,
      date: "2025-07-18",
      status: "Активный",
    },
    {
      title: "Мастер",
      total: 29,
      approved: 9,
      invited: 3,
      waiting: 1,
      date: "2025-07-18",
      status: "Активный",
    },
    {
      title: "Оператор базы данных 1С",
      total: 28,
      approved: 21,
      invited: 3,
      waiting: 0,
      date: "2025-07-18",
      status: "Активный",
    },
    {
      title: "Производитель работ",
      total: 72,
      approved: 23,
      invited: 13,
      waiting: 3,
      date: "2025-07-18",
      status: "Активный",
    },
    {
      title: "Специалист по планированию",
      total: 46,
      approved: 30,
      invited: 5,
      waiting: 1,
      date: "2025-06-26",
      status: "Активный",
    },
  ];
const VocanList = () => {
  let p =0;
  let a=0;
  let i=0;
  let w=0;
  let u = jobData.map((item)=>(p+=item.total))
  let q = jobData.map((item)=>(a+=item.approved))
  let y = jobData.map((item)=>(i+=item.invited))
  let e = jobData.map((item)=>(w+=item.waiting))
  
  return (
    <>
    <div className='custom_container'>
    <div className="overflow-x-auto p-4 pt-30">
      <table className="min-w-full border-collapse text-sm md:text-base">
        <thead>
          <tr className="bg-orange-400 text-white text-left">
            <th className="p-3">№</th>
            <th className="p-3">Актуальные вакансии</th>
            <th className="p-3">Всего откликов</th>
            <th className="p-3">Подтвержденные отклики</th>
            <th className="p-3">Приглашены на собеседование</th>
            <th className="p-3">Лист ожидания</th>
            <th className="p-3">Дата публикации</th>
            <th className="p-3">Статус</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {jobData.map((job, index) => (
            <tr
              key={index}
              className="border-t border-gray-200 hover:bg-orange-50"
            >
              <td className="p-3">{index + 1}</td>
              <td className="p-3">{job.title}</td>
              <td className="p-3">{job.total}</td>
              <td className="p-3">{job.approved}</td>
              <td className="p-3">{job.invited}</td>
              <td className="p-3">{job.waiting}</td>
              <td className="p-3">{job.date}</td>
              <td className="p-3 text-green-600">{job.status}</td>
            </tr>
          ))}
          <tr className="font-semibold bg-orange-100">
            <td colSpan={2} className="p-3 text-right">
              Итого
            </td>
            <td className="p-3">{p}</td>
            <td className="p-3">{a}</td>
            <td className="p-3">{i}</td>
            <td className="p-3">{w}</td>
            <td colSpan={2}></td>
          </tr>
        </tbody>
      </table>
    </div>
  
    </div>
    </>
  )
}

export default VocanList