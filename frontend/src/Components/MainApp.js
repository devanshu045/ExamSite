import React from 'react'
import { Link } from 'react-router-dom'
import './MainApp.scss'

const MainApp = () => {
  return (
    <div>
        <Link to='/teacher'>
          <button>
            Teacher 
          </button>
        </Link>
        <Link to='/student'>
        <button>
            Student
        </button>
        </Link>
    </div>
  )
}

export default MainApp