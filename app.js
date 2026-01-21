fetch("http://localhost:3000/api/invoices/1")
    .then(res => res.json())
    .then(invoices => {
        const output = document.getElementById("output");
        output.innerHTML = "";

        invoices.forEach(invoice => {
            const div = document.createElement("div");
            div.style.border = "1px solid black";
            div.style.padding = "10px";
            div.style.margin = "10px";

            div.innerHTML = `
                <p><b>Invoice ID:</b> ${invoice.invoiceId}</p>
                <p><b>Customer:</b> ${invoice.customerName}</p>
                <p><b>Items:</b></p>
            `;

            invoice.items.forEach(item => {
                div.innerHTML += `• ${item.name} — ₹${item.price}<br>`;
            });

            output.appendChild(div);
        });
    })
    .catch(err => {
        console.error("FRONTEND ERROR:", err);
        document.getElementById("output").innerText = "Error loading invoice";
    });
