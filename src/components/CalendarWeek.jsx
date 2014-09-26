'use strict';
var React = require('react');

var CalendarDay = require('./CalendarDay.jsx');

var CalendarWeek = React.createClass({
  render: function(){
    console.log(this.props.days);
    var _this = this;
    var CalendarDays = this.props.days.map(function(val, index){
      val = val || ' ';
      console.log(val);
      return (
        <td>
          <CalendarDay key={index} week={_this.props.key} day={val}/>
        </td>
        );
    });
    return (
      <tr> 
        {CalendarDays}
      </tr>
    );
  }
});



module.exports = CalendarWeek;