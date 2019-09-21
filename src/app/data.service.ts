import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  profileData =
    {
      firstName: 'tayyab',
      lastName: 'jameel',
      username: 'tayyab jameel',
      phone: '0347771993772',
      email: 'sample@gmail.com',
      address: 'At vero eos et accusamus et iusto odio .',
      university: 'Comsats Islamabad lahore Campus',
      semester: 7,
      department: 'computer science',
      imgUrl: 'data:image/jpeg;base64,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'
    }

  students = [
    {
      id: 1,
      first_name: "tayyab_updated",
      last_name: "jameel",
      username: "123",
      email: "tayyab123@gmail.com",
      university: "comsats university lahore",
      deparment: "computer science",
      semester: "6",
      created_at: null,
      updated_at: "2019-08-25 12:17:14"
    }, {
      id: 3,
      first_name: "OfZFf85zdP",
      last_name: "iTlnHjfExJ",
      username: "zVpYX0KeBK",
      email: "SmzOhmO5kA@gmail.com",
      university: "BHLGYxjV26",
      deparment: "31cfPFrpUZ",
      semester: "QUtmT6frW1",
      created_at: null,
      updated_at: null
    }, {
      id: 4,
      first_name: "EH2BvA9v9d",
      last_name: "fY1tIO0bIA",
      username: "ihyddVHfgQ",
      email: "rfQEQL14s2@gmail.com",
      university: "QYVvgwL0Ox",
      deparment: "rsinpWR3Pl",
      semester: "kJd0oOBMZr",
      created_at: "2019-08-25 11:25:57",
      updated_at: "2019-08-25 11:25:57"
    }, {
      id: 5,
      first_name: "qyuv2ZyxXO",
      last_name: "tZ6lxLW87R",
      username: "IAG2LXQ1qw",
      email: "11oZu8IwSC@gmail.com",
      university: "mm8NsRztIf",
      deparment: "xrTiBPAO7x",
      semester: "vSvaO6f4WA",
      created_at: "2019-08-25 11:25:58",
      updated_at: "2019-08-25 11:25:58"
    }, {
      id: 6,
      first_name: "mSNSZiX1aH",
      last_name: "8el2tpm31G",
      username: "jp9rOA0L4N",
      email: "EOrgPOoFMJ@gmail.com",
      university: "vHCtT1ywmK",
      deparment: "s7VHHm9yr0",
      semester: "eK4zjNvTPA",
      created_at: "2019-08-25 11:25:58",
      updated_at: "2019-08-25 11:25:58"
    }, {
      id: 7,
      first_name: "KioeM5OXzZ",
      last_name: "8z1BHLZ5YE",
      username: "U7PdhMTdrH",
      email: "R5mGcSgiE9@gmail.com",
      university: "8Vj63GM005",
      deparment: "hVx2pqWh13",
      semester: "FG3r9i9h5q",
      created_at: "2019-08-25 11:25:58",
      updated_at: "2019-08-25 11:25:58"
    }, {
      id: 8,
      first_name: "7cPnw162ar",
      last_name: "IFon0eUCZI",
      username: "ktahtGdBbe",
      email: "DN8V0ycoMx@gmail.com",
      university: "WhO7pVdJo6",
      deparment: "tgu2HFBwVb",
      semester: "xVqUKF6j9a",
      created_at: "2019-08-25 11:25:58",
      updated_at: "2019-08-25 11:25:58"
    }, {
      id: 9,
      first_name: "DG5xHuhr6U",
      last_name: "WW2MDChL0g",
      username: "F0zmEZrOCO",
      email: "AnIt0UwfQz@gmail.com",
      university: "UQM2MsE6CP",
      deparment: "vtjMPKXr6U",
      semester: "SZOfrzvGco",
      created_at: "2019-08-25 11:25:58",
      updated_at: "2019-08-25 11:25:58"
    }, {
      id: 10,
      first_name: "5N4Ku2ASVN",
      last_name: "bzGBYw5oIj",
      username: "Zgquak7uBp",
      email: "pYF7flBUzA@gmail.com",
      university: "3f7SEghFt5",
      deparment: "tF9koxnzOL",
      semester: "3v9tUOIUqw",
      created_at: "2019-08-25 11:25:58",
      updated_at: "2019-08-25 11:25:58"
    }, {
      id: 11,
      first_name: "TTjQkJFJlH",
      last_name: "jl4lxhJdPa",
      username: "vjNhnQuRO0",
      email: "ahtI8e5HEf@gmail.com",
      university: "wMg8VEHiQK",
      deparment: "jnnDnG3rfd",
      semester: "0fYvJPMplH",
      created_at: "2019-08-25 11:25:58",
      updated_at: "2019-08-25 11:25:58"
    }, {
      id: 12,
      first_name: "YqY82fXVHn",
      last_name: "6HgvEG1fR5",
      username: "DDz4YT6dWS",
      email: "NGyMr3sobq@gmail.com",
      university: "SmxJDFADzV",
      deparment: "vbeEOVc7Ge",
      semester: "9MsomIhPVR",
      created_at: "2019-08-25 11:25:58",
      updated_at: "2019-08-25 11:25:58"
    }, {
      id: 13,
      first_name: "q4mAwXduW7",
      last_name: "mCnQ2N4ZJJ",
      username: "KBGJ5TGrs1",
      email: "24i0x3GVPX@gmail.com",
      university: "0pkMCqZr2p",
      deparment: "zXc6oACrKW",
      semester: "emzUYoC5Lf",
      created_at: "2019-08-25 11:25:58",
      updated_at: "2019-08-25 11:25:58"
    }
  ]

  teachers =
    [
      { id: 1, first_name: "Tayyab", last_name: "Jamil", username: "M tayyab", email: "Tayyab@gmail.com", password: "1234", university: "Comsats lahore", deparment: "CS", semester: "7", subjects: "Artificial Inteligence", created_at: null, updated_at: null },
      { id: 2, first_name: "p0a95TKhd0", last_name: "qy3L9pMYZi", username: "5bp4dByW8X", email: "877ryK7yzY@gmail.com", password: "LwbcgYJu68", university: "Yrb12vFio9", deparment: "SfodS3DGhL", semester: "CJV3y7Wexa", subjects: "7wcpXY9ueg", created_at: "2019-08-27 15:11:03", updated_at: "2019-08-27 15:11:03" },
      { id: 3, first_name: "TueAAuyRvI", last_name: "rdnMP0UBRl", username: "e9OC0GNS20", email: "F8SvaaM1FK@gmail.com", password: "v7uuiTpmnB", university: "B4zlt4Z3Gh", deparment: "t8nLJDgRWP", semester: "ru1yLvn6qW", subjects: "IRLHWQ7Lte", created_at: "2019-08-27 15:11:03", updated_at: "2019-08-27 15:11:03" },
      { id: 5, first_name: "TIo8N1TxlV", last_name: "ykR1aRRAxD", username: "koLWPaV6Qk", email: "EYrWIhUVGe@gmail.com", "password": "JFG5JEk14K", university: "vXDzU0z0Vq", deparment: "rBc9hB1jti", semester: "8IuhkZpeNd", subjects: "eCkqTXeCTQ", created_at: "2019-08-27 15:11:03", updated_at: "2019-08-27 15:11:03" },
      { id: 7, first_name: "QHxxgtqsBi", last_name: "989jWFCzYQ", username: "oBVC3bs4dd", email: "UTyee7GFKy@gmail.com", "password": "FN1GrvjJKR", university: "BraPCFeKfU", deparment: "tg4u7bKTeH", semester: "MQRGDZ5W8B", subjects: "gl9NsNjSRC", created_at: "2019-08-27 15:11:03", updated_at: "2019-08-27 15:11:03" },
      { id: 8, first_name: "lJ7aWGpLG9", last_name: "LwxhvBHfOY", username: "nZgfzMpjYz", email: "M01BDHUb7V@gmail.com", "password": "mpKqTtBwW1", university: "3Qku7eB5uS", deparment: "yf0iDrG2HP", semester: "sEkH2tPsPI", subjects: "GTKPlquU0V", created_at: "2019-08-27 15:11:03", updated_at: "2019-08-27 15:11:03" }
    ]


  queries = [
    {
      id: 1, 
      title: "Subject", 
      estimate: '400',
      description: "Full Subject", 
      startDate: "Nov 1st", 
      endDate: "Dec 1st", 
      created_at: null, 
      updated_at: null
    },
    {
      id: 2, 
      title: "Subject", 
      estimate: '400',
      description: "Full Subject", 
      startDate: "Nov 1st", 
      endDate: "Dec 1st", 
      created_at: null, 
      updated_at: null
    },{
      id: 3, 
      title: "Subject", 
      estimate: '400',
      description: "Full Subject", 
      startDate: "Nov 1st", 
      endDate: "Dec 1st", 
      created_at: null, 
      updated_at: null
    },{
      id: 4, 
      title: "Subject", 
      estimate: '400',
      description: "Full Subject", 
      startDate: "Nov 1st", 
      endDate: "Dec 1st", 
      created_at: null, 
      updated_at: null
    },{
      id: 5, 
      title: "Subject", 
      estimate: '400',
      description: "Full Subject", 
      startDate: "Nov 1st", 
      endDate: "Dec 1st", 
      created_at: null, 
      updated_at: null
    },{
      id: 1, 
      title: "Subject", 
      estimate: '400',
      description: "Full Subject", 
      startDate: "Nov 1st", 
      endDate: "Dec 1st", 
      created_at: null, 
      updated_at: null
    },
    {
      id: 2, 
      title: "Subject", 
      estimate: '400',
      description: "Full Subject", 
      startDate: "Nov 1st", 
      endDate: "Dec 1st", 
      created_at: null, 
      updated_at: null
    },{
      id: 3, 
      title: "Subject", 
      estimate: '400',
      description: "Full Subject", 
      startDate: "Nov 1st", 
      endDate: "Dec 1st", 
      created_at: null, 
      updated_at: null
    },{
      id: 4, 
      title: "Subject", 
      estimate: '400',
      description: "Full Subject", 
      startDate: "Nov 1st", 
      endDate: "Dec 1st", 
      created_at: null, 
      updated_at: null
    },{
      id: 5, 
      title: "Subject", 
      estimate: '400',
      description: "Full Subject", 
      startDate: "Nov 1st", 
      endDate: "Dec 1st", 
      created_at: null, 
      updated_at: null
    },
  ]
}
