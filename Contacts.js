import React, { useContext } from 'react'

import { CSSTransition, TransitionGroup } from 'react-transition-group'

import ContactContext from '../Context/Contact/contactContext'
import NoContact from '../Pages/NoContact'
import ContactItem from './ContactItem'

const Contacts = () => {
  const contactContext = useContext(ContactContext)
  const { contacts, filtered } = contactContext

  if (contacts.length === 0) {
    return <NoContact />
  }

  return (
    <>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((contact) => (
              <CSSTransition key={contact.id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map((contact) => (
              <CSSTransition key={contact.id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </>
  )
}

export default Contacts
