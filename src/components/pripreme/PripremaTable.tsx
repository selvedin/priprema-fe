import React, { useState, useEffect } from 'react'
import { IPriprema } from 'types/Priprema'
import { FaTrash, FaEye, FaEdit } from 'react-icons/fa'
import axios from 'axios'
import swal from 'sweetalert'
import { Link } from 'react-router-dom'

const PripremaTable = () => {
  const [pripreme, setPripreme] = useState<IPriprema[]>([])

  useEffect(() => {
    try {
      axios.get(`${process.env.REACT_APP_BASE_PATH}/priprema`)
        .then((res) => {
          setPripreme(res.data)
        })
    } catch (error) {
      swal(error, 'error', 'error')
    }
  }, [])

  const deletePriprema = async (id: string | undefined) => {
    try {
      swal({
        title: 'Da li ste sigurni?',
        text: "Popravljanje posljedica ove akcije nece biti moguce!",
        icon: 'warning',
        buttons: [
          'Ne, odustani!',
          'Da, siguran sam!'
        ],
        dangerMode: true,
      }).then((isConfirmed) => {
        if (isConfirmed) {
          axios.delete(`${process.env.REACT_APP_BASE_PATH}/priprema`, { data: { _id: id } }).then((res) => {
            setPripreme(res.data)
            swal(
              'Izbrisano!',
              'Priprema je izbrisana.',
              'success'
            )
          })
        }
      })

    } catch (error) {
      swal(error.response.data, 'Greska priliko brisanja pripreme', 'error')
    }
  }
  return (
    <div>
      <table className='table table-stripped'>
        <thead><tr><th>#</th><th>Školska godina</th><th>Predmet</th><th>Razred</th><th></th></tr></thead>
        <tbody>
          {pripreme.map((pr: IPriprema, index: number) => {
            return (
              <tr key={pr._id}>
                <td>{index + 1}.</td>
                <td>{pr.skolskaGodina}</td>
                <td>{pr.predmet}</td>
                <td>{pr.razred}</td>
                <td className='text-right'>
                  <Link className="btn btn-secondary btn-sm mx-1" to={'/priprema/' + pr._id}>
                    <FaEye />
                  </Link>
                  <Link className="btn btn-primary btn-sm mx-1" to={'/priprema-edit/' + pr._id}>
                    <FaEdit />
                  </Link>
                  <button className="btn btn-danger btn-sm mx-1" onClick={() => deletePriprema(pr._id)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>)
          })}
        </tbody>
      </table>
    </div>
  )
}

export default PripremaTable
