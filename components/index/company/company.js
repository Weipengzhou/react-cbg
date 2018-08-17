

import Link from 'next/link'
import stylesheet from './company.less'
const Company = (props) => (
    <div className='find-company'>
      <ul>
        {props.CompanyList.companies_list.map((e, index) => (
          <li key={index}>
            <Link href={`${props.CompanyList.city.domain}/gs/${e.id}`}>
              <a className="company-link" >
                <div className="company-pic"><img className="page-load" alt={e.name} src={`http://www.zxjmy.com${e.company_logo}`} />
                </div>
                <p className="company-name">{e.name}</p>
                <div className="start-level"></div>
                <p className="company-disc">口碑值：{e.public_praise}</p>
              </a>
            </Link>
            <a className="company-poster-inquiry" href='/sheji' ><span className="company-icon-phone">免费设计</span> </a> 
          </li>
        ))}
      </ul>
      <style>{stylesheet}</style>
    </div>
  )

  export default Company;