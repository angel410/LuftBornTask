using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LuftBornTask
{

    /// <summary>
    /// Orders Details Modal
    /// </summary>
    public class OrderDetails
    {
        
        public int OrderDetailsId { get; set; }
        public int? Quantity { get; set; }

        public int? OrderId { get; set; }
        [ForeignKey("OrderId")]
        public virtual Order Order { get; set; }

        public int? PorductId { get; set; }
        [ForeignKey("PorductId")]
        public virtual Products Product { get; set; }
     
    }
}
