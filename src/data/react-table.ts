import mockData, { range } from 'utils/mock-data';

const newPerson = (index: number) => {
  const tempData = mockData(index);

  const platformCode = tempData.number.status(0, 7);
  let platform: string;

  switch (platformCode) {
    case 7:
      platform = 'Instagram';
      break;
    case 6:
      platform = 'Telegram';
      break;
    case 5:
      platform = 'Youtube';
      break;
    case 4:
      platform = 'Facebook';
      break;
    case 3:
      platform = 'Search Engine';
      break;
    case 2:
      platform = 'Drive Link';
      break;
    case 1:
      platform = 'Twitter';
      break;
    case 0:
    default:
      platform = 'Download Links';
      break;
  }

  const linksCode = tempData.number.status(0, 2);
  let links: string;
  switch (linksCode) {
    case 5:
      links = 'https://t.me/c/1942973741/14';
      break;
    case 4:
      links = 'https://t.me/c/1942973741/15';
      break;
    case 3:
      links = 'https://t.me/c/1942973741/16';
      break;
    case 2:
      links = 'https://t.me/c/1942973741/17';
      break;
    case 1:
      links = 'https://t.me/c/1942973741/18';
      break;
    case 0:
    default:
      links = 'https://t.me/c/1942973741/144';
      break;
  }

  let priority: string;
  switch (linksCode) {
    case 2:
      priority = 'High';
      break;
    case 1:
      priority = 'Medium';
      break;
    case 0:
    default:
      priority = 'Low';
      break;
  }

  const statusCode = tempData.number.status(0, 2);
  let status: string;
  switch (statusCode) {
    case 2:
      status = 'Complicated';
      break;
    case 1:
      status = 'Relationship';
      break;
    case 0:
    default:
      status = 'Single';
      break;
  }

  const orderStatusCode = tempData.number.status(0, 7);
  let orderStatus: string;
  switch (orderStatusCode) {
    case 7:
      orderStatus = 'Refunded';
      break;
    case 6:
      orderStatus = 'Completed';
      break;
    case 5:
      orderStatus = 'Delivered';
      break;
    case 4:
      orderStatus = 'Dispatched';
      break;
    case 3:
      orderStatus = 'Cancelled';
      break;
    case 2:
      orderStatus = 'Shipped';
      break;
    case 1:
      orderStatus = 'Processing';
      break;
    case 0:
    default:
      orderStatus = 'Pending';
      break;
  }

  return {
    id: index,
    firstName: tempData.name.first,
    lastName: tempData.name.last,
    email: tempData.email,
    age: tempData.number.age,
    role: tempData.role,
    visits: tempData.number.amount,
    progress: tempData.number.percentage,
    status,
    orderStatus,
    platform,
    links,
    priority,
    contact: tempData.contact,
    country: tempData.address.country,
    address: tempData.address.full,
    fatherName: tempData.name.full,
    about: tempData.text.sentence,
    avatar: tempData.number.status(1, 10),
    skills: tempData.skill,
    time: tempData.time,
    date: tempData.datetime
  };
};

// ===========================|| TABLE - USERS ||=========================== //

export default function makeData(...lens: any[]) {
  const makeDataLevel: any = (depth: number = 0) => {
    const len = lens[depth];
    return range(len).map((d, index) => ({
      ...newPerson(index + 1),
      subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
    }));
  };

  return makeDataLevel();
}
