# (21) Introduction Restfull API

## Apa itu API?
Application Progamming Interface (API) is a set of functions and procedures allowing the creation of applications that access the features or data of an operating system, application, or other service. 
API : Jembatan Back-End dengan Front-End

## Bagaimana cara API bekerja
1. Request : Client -> Server
2. Response: Server -> Client

## Apa itu REST?
REpresentational State Transef (REST) adalah sebuah hal dimana melakukan pertukaran data dan merupakan jalur yang umum digunakan. REST menggunakan HTTP protocol. Request dan Response nya dapat berupa format JSON, XML, SOAP. 

## Apa itu JSON?
Javascript Object Notation (JSON) Merupakan standar berkomunikasi antar bahasa pemrograman yang umum digunakan. 

## HTTP Response Code
HTTP Response code adalah sebuah kode yang memiliki arti

## Bagaimana best practice dari design REST API?
- Use Nouns Instead of Verbs
- Naming using plural nouns
- Use resource nesting to show relations or hierarchy
- Format Responses JSON
- Filtering, sorting, paging and field selection
- Handle Trailing Slashes Gracefully
- Versioning

## Apa itu MockAPI?
mockapi.io is a simple tool that lets you easily mock up APIs, generate custom data, and perform operations on it using RESTful interface. It is meant to be used as a prototyping/testing/learning tool.

## Bagaimana cara Implementasi MockAPI di react?
1. Membuat skema data dan endpoint di mockAPI
2. Menggunakan axios untuk get data