import { Component, OnInit } from '@angular/core';
import {Company} from './entity';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.css']
})
export class ListCompanyComponent implements OnInit {


public List<Company> listCompant() {
  String hql = "FROM company ";
  return (List<Company>) entityManager.createQuery(hql).getResultList();
}
  constructor() { }

  ngOnInit() {
  }

}
